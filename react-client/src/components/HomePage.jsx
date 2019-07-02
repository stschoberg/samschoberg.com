import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

class HomePage extends Component {

  constructor(props){
    super(props);
  }
    render() {
      return (
        <div style={{height:'100%'}}>
        <AppBar position="static" style={{textAlign: 'center', height:'100%', backgroundColor:"#005b96"}}>
        <Toolbar>
        <Typography variant="h6">College drunk.</Typography>
          <Typography variant="h2" style={{flexGrow: 1}}>
            samschoberg
          </Typography>
          <Typography variant="h6">Apiring developer.</Typography>
        </Toolbar>
        </AppBar>

        <Card style={{width:'30%', height:'600px'}}>
      <CardContent style={{width:'100%'}}>
      <a class="twitter-timeline" data-width="100%" data-height="500px" href="https://twitter.com/stschoberg?ref_src=twsrc%5Etfw">Tweets by stschoberg</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>      </CardContent>
      <CardActions>
        <Button size="large">Stalk my Twitter</Button>
      </CardActions>
    </Card>


        </div>
    )
      }
}


export default HomePage;