import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
        <Typography variant="h6">College drunk.</Typography>
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
          <Slide index={0}>
            <Card style={{width:'80%', height:'600px', margin:'auto', marginTop:'10px'}}>
            <CardContent>
              <a class="twitter-timeline" data-width="100%" data-height="500px" href="https://twitter.com/stschoberg?ref_src=twsrc%5Etfw">Tweets by stschoberg</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>      </CardContent>
            <CardActions>
            <Button size="large">Stalk my Twitter</Button>
            </CardActions>
            </Card>
          </Slide>
          <Slide>
            <Card style={{width:'2em', height:'600px', margin:'auto', marginTop:'10px'}}>
              <CardContent style={{width:'100%'}}>
                Checkout my resume.
              </CardContent>
              <CardActions>
              <Button size="large">Stalk my Twitter</Button>
              </CardActions>
              </Card>
          </Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
      </CarouselProvider>




        </Grid>
    )
      }
}


export default HomePage;