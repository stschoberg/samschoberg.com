import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class HomePage extends Component {

  constructor(props){
    super(props);
  }
    render() {
      return (
        <div>
        <AppBar position="static" style={{textAlign: 'center', height:'100px', backgroundColor:"#005b96"}}>
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>
            samschoberg
          </Typography>
        </Toolbar>
        </AppBar>
        <Container style={{width:'100%', height:'1000px', backgroundColor:'#e8f2f9'}}>
        <a class="twitter-timeline" href="https://twitter.com/stschoberg?ref_src=twsrc%5Etfw">Tweets by stschoberg</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </Container>
        </div>
    )
      }
}


export default HomePage;