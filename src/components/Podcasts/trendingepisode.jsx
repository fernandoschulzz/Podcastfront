import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {getTrendingEpisode } from "../../actions";
import { Grid, Typography} from "@mui/material";
import apple from '../images/apple.png'
import google from '../images/google.png'
import spotify from '../images/spotify.png'
import style from "./trendingepisode.module.css"

export default function TrendingEpisode() {

  const dispatch = useDispatch();
  const trendingEpisode = useSelector((state) => state.trendingEpisode)
  
  useEffect(() => {
    dispatch(getTrendingEpisode());
    return () => {
      dispatch(getTrendingEpisode());
    };
  }, [dispatch]);


    return (
      <div>
      {trendingEpisode.node?
        <Grid container direction="row"  className={style.container}>
          <Grid item>
            <Grid container direction="column" spacing="1.5rem" marginRight="5rem">
              <Grid item>
                <Grid container direction="row">
                <span className={style.line}>___</span><div>Trending Episode</div>
                </Grid>
              </Grid>
              
              <Grid item>
              <Typography maxWidth="30rem" variant="h3">{trendingEpisode.node.title}</Typography>
              </Grid>
              
              <Grid item>
              <Typography maxWidth="30rem">{trendingEpisode.node.podcastmeta.description}</Typography>
              </Grid>
              <Grid item>
              <Grid container direction="row">
                <div>Listen On Also</div><span className={style.line}>___</span>
                </Grid>
              </Grid>
              <Grid className={style.imagecontainer} container direction="row">
                <Grid item>
                  <img className={style.images} src={apple} alt="apple"></img>
                </Grid>
                <Grid item>
                <img className={style.images} src={google} alt="google"></img>
                </Grid>
                <Grid item>
                <img className={style.images} src={spotify} alt="spotify"></img>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item justifySelf="flex-end">
            <img className={style.mainImage} src={trendingEpisode.node.podcastmeta.image} alt="trendind-episode" />
          </Grid>
        </Grid>
        :<p>Loading...</p>}
        </div>
      )
}