import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/entry.webpack';

import { GitHubSummary } from 'react-github-summary'

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import resumeImage from './resumeImage.png'

const path = '/react-client/src/components/resume.pdf'
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
        <Grid style={{height:'100%', width:'100%'}}>
        <AppBar position="static" style={{textAlign: 'center', height:'100%', backgroundColor:"#005b96"}}>
        <Toolbar>
        <Typography variant="h6">Terp.</Typography>
          <Typography variant="h2" style={{flexGrow: 1}}>
            samschoberg
          </Typography>
          <Typography variant="h6">Apiring developer.</Typography>
        </Toolbar>
        </AppBar>



        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={1}>
            <Card style={{width:'80%', height:'600px', margin:'auto', marginTop:'10px'}}>
            <CardContent>
              <a class="twitter-timeline" data-width="90%" data-height="500px" href="https://twitter.com/stschoberg?ref_src=twsrc%5Etfw">Tweets by stschoberg</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>      </CardContent>
            <CardActions>
            <Button size="large">Stalk my Twitter</Button>
            </CardActions>
            </Card>
          </Slide>
          <Slide index={0}>
            <Card style={{width:'90%', height:'600px', margin:'auto', marginTop:'10px'}}>
            <CardContent>
              Checkout my resume.
              <a href={path} target='_blank'><img style={{'max-width':'100%', 'max-height':'100%'}}src={resumeImage}/></a>
            </CardContent>
              <CardActions>
              <Button size="large">Stalk my Twitter</Button>
              </CardActions>
              </Card>
          </Slide>
          <Slide index={2}>
          <Card style={{width:'90%', height:'600px', margin:'auto', marginTop:'10px'}}>

          <CardContent>
          <GitHubSummary username='your-username' width='200'/>
          </CardContent>
          </Card>
          </Slide>
        </Slider>
      </CarouselProvider>




        </Grid>
    )
      }
}


export default HomePage;