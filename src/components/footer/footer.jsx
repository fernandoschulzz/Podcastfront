import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import logo from '../images/huge.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import skype from '../images/skype.png'
import apple from '../images/apple.png'
import google from '../images/google.png'
import spotify from '../images/spotify.png'
import style from "./footer.module.css"


const useStyles = makeStyles(theme => ({
    logo: {
        height: "4.5rem"
    },
    imageicon: {
        height: "2.5rem"
    }
}))

export default function Footer() {
 const classes = useStyles();

    return (
        <Grid container direction="column" alignItems="center">
        <Grid item>
        <Grid container direction="row" spacing="6rem">
            <Grid item>
                <Grid container direction="column" spacing="1rem">
                    <Grid item><img className={classes.logo} src={logo} alt="nicasource"></img></Grid>
                    <Grid item ><Typography maxWidth="16rem">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Typography></Grid>
                    <Grid item>
                        <Grid container direction="row" spacing="1rem">
                            <Grid item><img className={classes.imageicon} src={facebook} alt="facebook"></img></Grid>
                            <Grid item><img className={classes.imageicon} src={linkedin} alt="linkedin"></img></Grid>
                            <Grid item><img className={classes.imageicon} src={instagram} alt="instagram"></img></Grid>
                            <Grid item><img className={classes.imageicon} src={skype} alt="skype"></img></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                 <Grid container direction="column" spacing="1.2rem">
                     <Grid item><Typography>Pages</Typography></Grid>
                     <Grid item><Typography>About</Typography></Grid>
                     <Grid item><Typography>Episodes</Typography></Grid>
                     <Grid item><Typography>Blog</Typography></Grid>
                     <Grid item><Typography>Contact</Typography></Grid>
                 </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="column" spacing="1.2rem">
                    <Grid item><Typography>Recent Episodes</Typography></Grid>
                    <Grid item><Typography>Episode 1</Typography></Grid>
                    <Grid item><Typography>Episode 2</Typography></Grid>
                    <Grid item><Typography>Episode 3</Typography></Grid>
                    <Grid item><Typography>Episode 4</Typography></Grid>
                </Grid>
            </Grid>
            <Grid item>
                 <Grid container direction="column">
                     <Grid item marginBottom="1.2rem"><Typography>Listen My podcast Also in</Typography></Grid>
                     <Grid item><img src={google} alt="gogle" className={style.images}></img></Grid>
                     <Grid item><img src={apple} alt="apple" className={style.images}></img></Grid>
                     <Grid item><img src={spotify} alt="spotify" className={style.images}></img></Grid>
                 </Grid>
            </Grid>
        </Grid>
        </Grid>
            <Grid item className={style.lastline}><Typography>@2022 NicaSource All Rigths Reserved</Typography></Grid>
        </Grid>
    )
}