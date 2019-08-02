import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/entry.webpack';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
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
import githubLogo from './githubLogo.png'
import { mergeClasses } from '@material-ui/styles';
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
const iconLogos = [twitterLogo, githubLogo, linkedinLogo, resumeLogo];

class NavList extends React.Component {


    render() {
        const {classes} = this.props;
        return(
            <div className={classes.root}>

               {
                   iconLogos.map((logo) =>
                        (
                           <ListItem button style={{padding: '0px', width:'70px'}}>
                                    <img src={logo} className={classes.icon}/>
                           </ListItem>
                       ))
               }

            </div>
        )
    }
}

export default withStyles(styles)(NavList);