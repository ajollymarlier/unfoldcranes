import '../styles/AboutView.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	card: {
		maxWidth: 250,
		minheight: 400,
		alignContent: 'center',
		backgroundColor: 'transparent',
		boxShadow: 'none',
		fontFamily: 'carrois_gothicregular',
		color: '#070048'
	},
	media: {
		alignSelf: 'center',
		width: 250,
		height: 300
	}
}));

/* from https://stackoverflow.com/questions/62039217/add-buy-me-a-coffee-widget-to-react-application*/
//TODO: change data-message maybe
class BuyMeACoffee extends React.Component {
	constructor(props) {
		super(props);
		let script = document.createElement('script');
		script.setAttribute('data-name', 'BMC-Widget');
		script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
		script.setAttribute('data-id', 'unfold_cranes');
		script.setAttribute('data-description', 'Thank you for your support!');
		script.setAttribute('data-message', 'This web is free to use. Do you want to help supporting it?');
		script.setAttribute('data-color', '#FFDD00');
		script.setAttribute('data-position', 'right');
		script.setAttribute('data-x_margin', '18');
		script.setAttribute('data-y-margin', '18');
		script.async = true;
		//Call window on load to show the image
		script.onload = function() {
			var evt = document.createEvent('Event');
			evt.initEvent('DOMContentLoaded', false, false);
			window.dispatchEvent(evt);
		};
		this.script = script;
	}

	componentDidMount() {
		document.head.appendChild(this.script);
	}

	componentWillUnmount() {
		document.head.removeChild(this.script);
		document.body.removeChild(document.getElementById('bmc-wbtn'));
	}

	render() {
		return null;
	}
}

const AboutView = () => {
	const classes = useStyles();

	return (
		// <Parallax bgImage={require(BackgroundImage)}>
    <div>
			<h2>ABOUT UNFOLD</h2>
			<p>
				The Unfold project was founded by four University of Toronto students in September 2020. We wanted to
				create a way for people to connect during the pandemic. Our vision is that Unfold will provide a safe
				and welcoming space for people to express themselves, share personal stories, or find solace in others’
				experiences during this strange time. All the same, we don’t intend for this project to be restricted to
				the duration of the pandemic — we believe that there is always someone who could use a way to connect
				with others. <br />
				<br />
				We were visually inspired by the Japanese legend of the one thousand paper cranes. This legend promises
				that a person who folds one thousand origami cranes will be granted a wish. We hope that, over time, our
				page will be filled with thousands of cranes and thousands of stories from people all around the world
				-- and that sharing their thoughts here will help them reflect on their lives and have their wishes be
				granted.
			</p>

			<h2>OUR TEAM</h2>
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
						<CardHeader title="Arun Jolly Marlier" subheader="Lead developer" />
						<CardMedia className={classes.media} image="arun.jpg" title="Arun" />

						<CardContent className={classes.cardContent}>
							<Typography variant="body2" color="textSecondary" component="p">
								Arun is a Computer Science student at the University of Toronto. An avid musician, and
								self-purported tech geek, he strives to find different ways to reach people and affect
								their lives for the better. Arun co-founded Unfold to achieve this goal and provide a
								platform where those in need can find comfort in the fact that they are not alone.
								<br />
								<br />
								Email: arunjm00@gmail.com Github: ajollymarlier
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item>
					<Card className={classes.card}>
						<CardHeader title="Jocelyn Tamura" subheader="Graphics Designer" />
						<CardMedia className={classes.media} image="jocelyn.jpg" title="Jocelyn" />

						<CardContent className={classes.cardContent}>
							<Typography variant="body2" color="textSecondary" component="p">
								Jocelyn is a Global Health and Anthropology student at the University of Toronto. As an
								origami workshop volunteer at a children’s hospital, she noticed that origami helped
								patients and families alike relax and open up about their lives. Jocelyn co-founded
								Unfold as a way to share the calming effects of origami with others. <br />
								<br />
								Email: jocelyn.tamura@mail.utoronto.ca
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item>
					<Card className={classes.card}>
						<CardHeader title="Andrew Feng" subheader="Frontend developer" />
						<CardMedia className={classes.media} image="andrew.jpg" title="Andrew" />

						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								Andrew studies Computer Science and Mathematics at University of Toronto. He loves
								theoretical CS and pure math, but during time off you would see him shredding gnarly
								trails on his mountain bike. Andrew truly believes that if people communicate genuinely
								with less judgement, the world would be more bearable. Thus he works on Unfold—a place
								for genuine stories. <br />
								<br />
								Email: andrewfengnull@gmail.com
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item>
					<Card className={classes.card}>
						<CardHeader title="Yvonne Yang" subheader="Frontend developer" />
						<CardMedia className={classes.media} image="yvonne.jpg" title="Yvonne" />

						<CardContent className={classes.cardContent}>
							<Typography variant="body2" color="textSecondary" component="p">
								Yvonne is in Computer Engineering at the University of Toronto. As someone who loves
								programming as much as art, she enjoyed contributing to this project, which also
								conveniently serves a great cause. When not burying her nose in overpriced textbooks,
								Yvonne is mostly found in a couch with a good book and her cat, or on a bike blasting
								Tchaikovsky piano concerto in her ears.<br />
								<br />
								Email: yvonnnnovy@gmail.com Github: yvonne-yang
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			{/* <h2>CONTACT</h2>
			<p id="contact">
				Have any comments or questions? We'd love to hear from you!<br />
				<br />
				Our email: unfoldcranes@gmail.com
			</p> */}

			<BuyMeACoffee />
		{/* </Parallax> */}
    </div>
	);
};

export default AboutView;
