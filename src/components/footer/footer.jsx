import React from "react";
import { Grid, TextField, Typography } from "@mui/material";
import logo from '../images/huge.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import skype from '../images/skype.png'
import apple from '../images/apple.png'
import google from '../images/google.png'
import spotify from '../images/spotify.png'
import style from "./footer.module.css"

export default function Footer() {
    return (
        <Grid container direction="column">
        <Grid item>
        <Grid container direction="row">
            <Grid item>
                <Grid container direction="column">
                    <Grid item><img height="50px" src={logo} alt="nicasource"></img></Grid>
                    <Grid item><Typography>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Typography></Grid>
                    <Grid item>
                        <Grid container direction="row">
                            <Grid item><img height="25px" src={facebook} alt="facebook"></img></Grid>
                            <Grid item><img height="25px" src={linkedin} alt="linkedin"></img></Grid>
                            <Grid item><img height="25px" src={instagram} alt="instagram"></img></Grid>
                            <Grid item><img height="25px" src={skype} alt="skype"></img></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                 <Grid container direction="column">
                     <Grid item><Typography>Pages</Typography></Grid>
                     <Grid item><Typography>About</Typography></Grid>
                     <Grid item><Typography>Episodes</Typography></Grid>
                     <Grid item><Typography>Blog</Typography></Grid>
                     <Grid item><Typography>Contact</Typography></Grid>
                 </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="column">
                    <Grid item><Typography>Recent Episodes</Typography></Grid>
                    <Grid item><Typography>Episode 1</Typography></Grid>
                    <Grid item><Typography>Episode 2</Typography></Grid>
                    <Grid item><Typography>Episode 3</Typography></Grid>
                    <Grid item><Typography>Episode 4</Typography></Grid>
                </Grid>
            </Grid>
            <Grid item>
                 <Grid container direction="column">
                     <Grid item><Typography>Listen My podcast Also in</Typography></Grid>
                     <Grid item><img src={google} alt="gogle" className={style.images}></img></Grid>
                     <Grid item><img src={apple} alt="apple" className={style.images}></img></Grid>
                     <Grid item><img src={spotify} alt="spotify" className={style.images}></img></Grid>
                 </Grid>
            </Grid>
        </Grid>
        </Grid>
            <Grid item><Typography>@2022 NicaSource All Rigths Reserved</Typography></Grid>
        </Grid>
    )
}