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
import Paper from '@material-ui/core/Paper';
const path = 'https://schoberg-resume.s3.amazonaws.com/resume.pdf'
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






      return (
        <div style={{width:'100%', height:'100%'}}>
        <AppBar position="static" style={{textAlign: 'center', height:'100%', backgroundColor:"#005b96"}}>
        <Toolbar>
        <Typography variant="h6">Terp.</Typography>
          <Typography variant="h2" style={{flexGrow: 1}}>
            samschoberg
          </Typography>
          <Typography variant="h6">Apiring engineer.</Typography>
        </Toolbar>
        </AppBar>

        <div style={{paddingLeft:'13%', alignContent:'center'}}>
        <Grid container spacing={3}>

        <Grid item xs={5} style={{paddingTop:'2%', textAlign:'center'}}>
          <Paper > 
            <a href={path} target='_blank'><img style={{'max-width':'100%', 'max-height':'100%'}}src={resumeImage}/></a>
            <Typography variant='h6'>Click for PDF</Typography>
          </Paper>
        </Grid>
        <Grid item  xs={5} style={{paddingTop:'2%', height:'100px'}}>
          <Paper >
          <a class="twitter-timeline" data-height='600'  href="https://twitter.com/stschoberg?ref_src=twsrc%5Etfw">Tweets by stschoberg</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </Paper>
        </Grid>

      </Grid>

      <Grid item  xs={5} style={{paddingTop:'2%', height:'100px'}}>
          <Paper >
          <Typography variant='h2'>Cool Things Right Now: </Typography>
          <ul style={{paddingTop:'10px'}}>
            <li>Social Network Analysis</li>
              <ul>
                <li>Started using graph databases at work and wanted to learn more about applications to social media. </li>
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


      </div>


    )
      }
}


export default HomePage;