import '../styles/AboutView.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	card: {
		maxWidth: 250,
		minheight: 400,
		alignContent: 'center',
		backgroundColor: 'beige'
	},
	media: {
		alignSelf: 'center',
		width: 250,
		height: 200
	}
}));

const AboutView = () => {
	const classes = useStyles();

	return (
		<div>
			<Grid
				container
				className={classes.root}
				alignItems="flex-start"
				direction="row"
				justify="center"
				spacing={2}
			>
				<Grid item>
					<Card className={classes.card}>
						<CardHeader title="Arun Jolly Marlier" subheader="Backend, frontend, everything basically" />
						<CardMedia className={classes.media} image="picture_of_me.jpg" title="Arun" />

						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item>
					<Card className={classes.card}>
						<CardHeader title="Jocelyn Tamura" subheader="Amazing Graphics Designer" />
						<CardMedia className={classes.media} image="picture_of_me.jpg" title="Jocelyn" />

						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item>
					<Card className={classes.card}>
						<CardHeader title="Andrew Feng" subheader="Frontend" />
						<CardMedia className={classes.media} image="picture_of_me.jpg" title="Andrew" />

						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item>
					<Card className={classes.card}>
						<CardHeader title="Yvonne Yang" subheader="Watching these people work their magic" />
						<CardMedia className={classes.media} image="picture_of_me.jpg" title="Yvonne" />

						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};

export default AboutView;
