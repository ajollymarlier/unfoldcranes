import '../styles/AboutView.css';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Card, CardHeader, CardContent, Typography, Avatar } from '@material-ui/core';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'
import React from 'react';
import BgImage from '../origami.jpg'

const useStyles = makeStyles((theme) => ({
  box:{
    display: 'flex',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    backgroundPosition: 'left center',
		backgroundImage: `url(${BgImage})`,
    '& > div > p':{
      margin: '0%',
      padding: '1%',
      background: 'white',
      color: '#0f0f0f',
    },
  },
	grid: {
		flexGrow: 1,
  },
	card: {
    boxShadow: 'none',
	},
	media: {
		alignSelf: 'center',
		width: 150,
		height: 150
	}
}));

const AboutView = () => {
	const classes = useStyles();

	return (
		<div>
      
      <Box
        className={classes.box}
        boxShadow={6}
        borderRadius={12}>
          <div>
            <div class="about-heading">
              <h2>ABOUT UNFOLD</h2>
            </div>
            <p>
              The Unfold project was founded by four University of Toronto students in August 2021. We wanted to
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
          </div>
      </Box>

      <Box
        className={classes.box}
        boxShadow={6}
        borderRadius={12}
      >
        <div>
          <div class="about-heading">
            <h2>OUR TEAM</h2>
          </div>
			<Grid
				container
				className={classes.grid}
				alignItems="flex-start"
				direction="row"
				justify="flex-start"
				spacing={7}
			>
				<Grid item xs={12} sm={6} md={6} lg={3}>
					<Card className={classes.card} elevation={10}>
						<CardHeader title="Arun Jolly Marlier" subheader="Lead developer" />
            <div class='media-container'>
						<Avatar className={classes.media} src="arun.jpg" alt="Arun" />
            </div>

            <div class="person-contact">
                <div>
                <a href="mailto:arunjm00@gmail.com"><FiMail size={20}/></a>
                </div>
                <div>
                <a href="https://www.github.com/ajollymarlier/"><FaGithubAlt size={20}/></a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/arunjollymarlier"><FaLinkedinIn size={20}/> </a>
                </div>
            </div>
						<CardContent className={classes.cardContent} elevation={5}>
							<Typography variant="body2" color="textSecondary" component="p">
								Arun is a Computer Science student at the University of Toronto. An avid musician, and
								self-purported tech geek, he strives to find different ways to reach people and affect
								their lives for the better. Arun co-founded Unfold to achieve this goal and provide a
								platform where those in need can find comfort in the fact that they are not alone.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={3}>
					<Card className={classes.card} elevation={5}>
						<CardHeader title="Jocelyn Tamura" subheader="Graphics Designer" />
            <div class='media-container'>
						<Avatar className={classes.media} src="jocelyn.jpg" alt="Jocelyn" />
            </div>

            <div class="person-contact">
                <div>
                <a href="mailto:jocelyn.tamura@mail.utoronto.ca"><FiMail size={20}/></a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/jocelynktamura/"><FaLinkedinIn size={20}/> </a>
                </div>
            </div>
						<CardContent className={classes.cardContent} elevation={5}>
							<Typography variant="body2" color="textSecondary" component="p">
								Jocelyn is a Global Health and Anthropology student at the University of Toronto. As an
								origami workshop volunteer at a children’s hospital, she noticed that origami helped
								patients and families alike relax and open up about their lives. Jocelyn co-founded
								Unfold as a way to share the calming effects of origami with others.
              </Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={3}>
					<Card className={classes.card} elevation={5}>
						<CardHeader title="Andrew Feng" subheader="Frontend developer" />
            <div class='media-container'>
						<Avatar className={classes.media} src="andrew.jpg" alt="Andrew" />
            </div>

            <div class="person-contact">
                <div>
                <a href="mailto:andrewfengnull@gmail.com"><FiMail size={20}/></a>
                </div>
                <div>
                <a href="https://www.github.com/andrewfeng123/"><FaGithubAlt size={20}/></a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/andrew-feng-null/"><FaLinkedinIn size={20}/> </a>
                </div>
            </div>
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								Andrew studies CS and Math at University of Toronto. He loves theory, but during time off you would see him shredding gnarly
								trails on his mountain bike. Andrew truly believes that if people communicate genuinely
								with less judgement, the world would be more bearable. Thus he works on Unfold—a place
								for genuine stories. 
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={3}>
					<Card className={classes.card} elevation={10}>
						<CardHeader title="Yvonne Yang" subheader="Frontend developer" />
            <div class='media-container'>
						<Avatar className={classes.media} src="yvonne.jpg" alt="Yvonne" />
            </div>

            <div class="person-contact">
                <div>
                <a href="mailto:yvonne.y.yang@outlook.com"><FiMail size={20}/></a>
                </div>
                <div>
                <a href="https://www.github.com/yvonne-yang/"><FaGithubAlt size={20}/></a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/yvonne-y-yang/"><FaLinkedinIn size={20}/> </a>
                </div>
            </div>
						<CardContent className={classes.cardContent}>
							<Typography variant="body2" color="textSecondary" component="p">
								Yvonne is in Computer Engineering at the University of Toronto. As someone who loves
								programming as much as art, she enjoyed contributing to this project. When not burying her nose in overpriced textbooks,
								Yvonne is mostly found in a couch with a good book and her cat, or on a bike blasting
								Tchaikovsky piano concerto in her ears.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
      </div>
      </Box>
    </div>
	);
};

export default AboutView;
