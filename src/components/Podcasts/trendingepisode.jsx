import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { getPodcasts, getTrendingEpisode } from "../../actions";
import { makeStyles } from '@mui/styles';
import { Grid, Typography, Button} from "@mui/material";
import apple from '../images/apple.png'
import google from '../images/google.png'
import spotify from '../images/spotify.png'
import style from "./trendingepisode.module.css"

export default function TrendingEpisode() {

  const dispatch = useDispatch();
  const trendingEpisode = useSelector((state) => state.trendingEpisode)
 
  console.log(trendingEpisode)
  
  useEffect(() => {
    dispatch(getTrendingEpisode());
    return () => {
      dispatch(getTrendingEpisode());
    };
  }, [dispatch]);


    return (
        <Grid container direction="row" alignItems="center" paddingBottom="2rem">
          <Grid item>
            <Grid container direction="column" spacing="1.5rem" marginRight="5rem">
              <Grid item>
                <Grid container direction="row">
                <Typography className={style.line} color="red">___</Typography><div>Trending Episode</div>
                </Grid>
              </Grid>
              <Grid item>
              <Typography maxWidth="30rem" variant="h3">Lorem ipsum dolor sit amet</Typography>
              </Grid>
              <Grid item>
              <Typography maxWidth="30rem">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</Typography>
              </Grid>
              <Grid item>
              <Grid container direction="row">
                <div>Listen On Also</div><Typography className={style.line} color="red">___</Typography>
                </Grid>
              </Grid>
              <Grid className={style.imagecontainer} container direction="row">
                <Grid item>
                  <img className={style.images} src={apple}></img>
                </Grid>
                <Grid item>
                <img className={style.images} src={google}></img>
                </Grid>
                <Grid item>
                <img className={style.images} src={spotify}></img>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item justifySelf="flex-end">
            <img src="https://images.vexels.com/media/users/3/210611/isolated/preview/61be446270cdd0cd3e599a95df8819c7-mujer-hablando-en-podcast-personaje-mujer.png" alt="" />
          </Grid>
        </Grid>
      )
}