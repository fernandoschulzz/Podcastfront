import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { getPodcasts } from "../../actions";
import style from "./podcasts.module.css"


export default function Podcasts() {

  const dispatch = useDispatch();
  const allPodcasts = useSelector(state => state.podcasts)
  const podcasts = allPodcasts.slice(3,6)
  
  useEffect(() => {
    dispatch(getPodcasts());
    return () => {
      dispatch(getPodcasts());
    };
  }, [dispatch]);


  return (
    <Card>
        <CardContent>
        <Grid container direction="column">
          <Grid item>
            <Grid container direction="row">
            <Grid item marginLeft="2rem" marginTop="2rem">
              <Typography variant="h4" paddingBottom="3rem">Latest Podcast Episodes</Typography>
            </Grid>
            <Grid item marginLeft="auto">
                <Button variant="contained" color="error">View All</Button>
            </Grid>
            </Grid>
          </Grid>
{ podcasts&& podcasts.map((ele) =>(


          <Grid key={ele.node.date} item marginBottom="2.3rem">
            <Grid container direction="row" spacing="2rem">
              <Grid item marginLeft="3rem">
                <CardMedia
                className={style.images}
                component="img"
                height="180"
                image={ele.node.podcastmeta.image}
                alt="coding">
                </CardMedia>
              </Grid>
              <Grid item>
                <Grid container direction="column" spacing="2rem">
                  <Grid item>
                  <Typography maxWidth="35rem" variant="h6">{ele.node.title}</Typography>
                  </Grid>
                  <Grid item>
                  <Typography maxWidth="35rem">{ele.node.podcastmeta.description}</Typography>
                  </Grid>
                  <Grid item justifySelf="flex-end">
                  <Button variant="outlined" color="error">Know More</Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item alignSelf="center" marginLeft="auto" marginRight="7rem">
              <Grid container direction="column" spacing="0.5rem" borderLeft="1px solid grey">
                <Grid item >
                  <Typography># Season</Typography>
                </Grid>
                <Grid item>
                <Typography># Posted on</Typography>
                </Grid>
                <Grid item>
                <Typography># Categories</Typography>
                </Grid>
              </Grid>
              </Grid>
            </Grid>
          </Grid>

))}
          <Grid item alignSelf="center">
          <Button variant="outlined" color="error">Show more episodes</Button>
          </Grid>
        </Grid>
       </CardContent>
     </Card>
  )
}