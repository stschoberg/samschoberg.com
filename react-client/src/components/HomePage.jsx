import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/entry.webpack';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import resumeImage from './resumeImage.png'
import twitterLogo from './Twitter_Social_Icon_Circle_Color.png'
import linkedinLogo from './linkedinLogo.png'
import resumeLogo from './resumeLogo.png'
import NavList from './NavList.jsx';
import ListItem from '@material-ui/core/ListItem'
import githubLogo from './githubLogo.png'
import Paper from '@material-ui/core/Paper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core';
const styles = theme => ({
  root:{
      paddingTop: '325px'
  },
  icon:{
      width: '25px',
      marginRight: '22.5px',
      marginLeft: '22.5px',
      marginTop:'11px',
      marginBottom:'11px'
  }
})
class HomePage extends Component {
  constructor(props){
    super(props);
  }
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


      const {classes} = this.props;


      return (
        <div style={{width:'100%', height:'100%'}}>
        <AppBar position="static" style={{textAlign: 'center', height:'100%', backgroundColor:"#005b96"}}>
        <Toolbar>
          <div style={{'margin-left': 'auto' ,'margin-right': 'auto', 'width': '40%'}}>
     <Typography variant="h2" style={{flexGrow: 1}}>
      <a target='_blank' href="https://twitter.com/stschoberg"><img src={twitterLogo} className={classes.icon}/></a>
      <a target='_blank' href="https://github.com/stschoberg'"><img src={githubLogo} className={classes.icon}/></a>

               stschoberg
               <a target='_blank' href="https://www.linkedin.com/in/stschoberg/"><img src={linkedinLogo} className={classes.icon}/></a>
      <a target='_blank' href='https://schoberg-resume.s3.amazonaws.com/resume.pdf'><img src={resumeLogo} className={classes.icon}/></a>
             </Typography>


               </div>
        </Toolbar>
        </AppBar>

        <div style={{'margin-left': 'auto' ,'margin-right': 'auto', 'width': '30%', marginTop:'10px'}}>


        <Grid container spacing={1} style={{marginBottom:10}}>
          <Paper >
          <Typography variant='h2'>Bio: </Typography>
            My name is Sam, and I'm a CS/Spanish double major at the University of Maryland.
            I'm playing around with graph theory and visualizations for social network analysis.
          </Paper>
        </Grid>
      <Grid container spacing={1}style={{marginBottom:10}}>
          <Paper >
          <Typography variant='h2'>Cool Things Right Now: </Typography>
          <ul style={{paddingTop:'10px'}}>
          <li>Check out my Twitter Bot</li>
              <ul>
                <li><a href="https://twitter.com/RatingTrumps/">Sentiment analyzer for Trump's tweets.</a></li>
                <li>Built with AWS Lambda and Comprehend</li>                
              </ul>
            <li>Social Network Analysis</li>
              <ul>
                <li><a href="https://www.amazon.com/Social-Network-Analysis-Startups-connections/dp/1449306462">Analyzing social networks for Startups.</a></li>
                <li><a href="https://github.com/stschoberg/SocialNetworkAnalysis">Some code.</a></li>                
              </ul>
            <li>Summer Books</li>
              <ul>
                <li>All The Light we Cannot See by Anthony Doerr</li>
                <li>Shoe Dog by Phil Knight</li>

              </ul>
            <li>This Site</li>
            <ul>
                <li>A back end to submit good quotes from summer books?</li>
                <li>Make responsive.</li>
                <li>Showcase some of social network analysis.</li>

              </ul>
          </ul>
          </Paper>
        </Grid>


      </div>
      <AppBar position="static" style={{marginBottom:0,textAlign: 'center', height:'100%', backgroundColor:"#005b96"}}>
        <Toolbar>
        </Toolbar>
        </AppBar>

      </div>


    )
      }
}


export default withStyles(styles)(HomePage);