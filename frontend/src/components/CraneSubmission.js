import '../styles/CraneSubmission.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import {Alert} from '@material-ui/lab';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageList from '@material-ui/core/ImageList';
import * as Constants from './Constants';

const useStyles = makeStyles((theme) => ({
	root: {
		flexWrap: 'wrap',
		'& .MuiTextField-root': {
			margin: theme.spacing(1)
		}
	},
	submitButton: {
		margin: '5%',
		marginLeft: '2%',
		color: 'white',
		background: 'linear-gradient(45deg, #ff9933 30%, #FF8E53 60%)',
		width: '30%',
		alignSelf: 'left'
	}
}));

function CraneSubmission() {
	const classes = useStyles();
	var [ countryCode, setCountryCode ] = React.useState('');
	var [ message, setMessage ] = React.useState('');
	var [ profaneWarning, setProfaneWarning ] = React.useState('');
	var [ name, setName ] = React.useState('');
	var [ activeColor, setActiveColor ] = React.useState(Constants.colorData[0].color);
	var [ submitAttempted, setSubmitAttempted ] = React.useState(false);

	var submit = async (event) => {
		var Filter = require('bad-words');
    var bFilter = new Filter();
		setSubmitAttempted(true);
		var shouldSubmit = true;
		if (!countryCode) {
			shouldSubmit = false;
			alert('Country cannot be empty');
		}
		if (!message || !name) {
			shouldSubmit = false;
		}
		//alert(message + ': ' + bFilter.isProfane('fuck'));
		if (message && bFilter.isProfane(message)) {
      setProfaneWarning(true);
			shouldSubmit = false;
		}
		if (shouldSubmit)
			await fetch('/cranes', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({
					name: name,
					message: message,
					country: countryCode,
					backgroundColor: activeColor,
					creationTime: new Date().toLocaleString()
				})
			});
		else {
			event.stopPropagation();
			event.preventDefault();
		}
	};

	return (
		<div>
			<Grid container alignItems="center" direction="column">
				<Box width="50%" padding="2%">
					<h2>SUBMIT A CRANE</h2>
					<p class="centered-p">Unfold your story here!</p>
					<Grid container class="form">
						<form className={classes.root} noValidate autoComplete="off" onSubmit={submit}>
							<Grid container direction="column" justify="center" >
								<Grid container direction="row" justify="flex-start">
									<TextField
										required
										variant="outlined"
										id="outlined-required"
										label="Name"
										error={submitAttempted == true && !name}
										helperText={submitAttempted == true && !name ? 'Name cannot be empty' : ''}
										onChange={(event) => {
											setName(event.target.value);
										}}
										className="submissionContent"
										style={{ backgroundColor:"white" }}
									/>
									<Autocomplete
										onChange={(event, value, reason) => {
											if (value) setCountryCode(value.substring(0, 3));
											else setCountryCode('');
										}}
										options={Constants.countryCodes}
										getOptionLabel={(code) => code.substring(4, code.length)}
										style={{ width: 174, backgroundColor: "white" }}
										renderInput={(params) => (
											<TextField {...params} label="Country" variant="outlined" />
										)}
										className="submissionContent"
									/>
									<TextField
										required
										id="outlined-multiline-static"
										label="Message"
										multiline
										rows={4}
										defaultValue=""
										variant="outlined"
										fullWidth
										error={submitAttempted == true && !message}
										helperText={
											submitAttempted == true && !message ? 'Message cannot be empty' : ''
										}
										onChange={(event) => {
											setMessage(event.target.value);
										}}
										className="submissionContent"
										style={{ backgroundColor: "white" }}
									/>
								</Grid>
								<Grid container justify="flex-start" className="submissionContent">
									<ImageList cols={Constants.colorData.length} rowHeight="auto" style={{ backgroundColor: "white" }}>
										{Constants.colorData.map((item) => (
											<ImageListItem
												key={item.color}
												onClick={() => {
													setActiveColor(item.color);
												}}
											>
												<img
													className={
														item.color == activeColor ? (
															'active-color color'
														) : (
															'normal-color color'
														)
													}
													srcSet={`${item.src}`}
												/>
											</ImageListItem>
										))}
									</ImageList>
								</Grid>
								<Button
									variant="contained"
									className={classes.submitButton}
									disableElevation
									type="submit"
								>
									Submit
								</Button>
							</Grid>
						</form>
					</Grid>
				</Box>
			</Grid>
      <Snackbar open={profaneWarning}>
          <Alert severity="warning" variant="filled" color="warning" onClose={() => {setProfaneWarning(false)}}>Your message contains profane language!</Alert>
      </Snackbar>
		</div>
	);
}

export default CraneSubmission;
