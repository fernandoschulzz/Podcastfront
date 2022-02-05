import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { getPodcasts } from "../../actions";


export default function Podcasts() {

  const dispatch = useDispatch();
  const allPodcasts = useSelector(state => state.podcasts)
  const podcasts = allPodcasts.slice(3,6)
  console.log(podcasts)
  
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
            <Grid item>
              <Typography variant="h4" paddingBottom="3rem">Latest Podcast Episodes</Typography>
            </Grid>
            <Grid item marginLeft="auto">
                <Button variant="contained" color="error">View All</Button>
            </Grid>
            </Grid>
          </Grid>
{ podcasts&& podcasts.map((ele) =>(


          <Grid item marginBottom="2.3rem">
            <Grid container direction="row" spacing="2rem">
              <Grid item>
                <CardMedia
                component="img"
                height="180"
                image={ele.node.podcastmeta.image}
                alt="coding">
                </CardMedia>
              </Grid>
              <Grid item>
                <Grid container direction="column" spacing="2rem">
                  <Grid item>
                  <Typography maxWidth="40rem" variant="h5">{ele.node.title}</Typography>
                  </Grid>
                  <Grid item>
                  <Typography maxWidth="40rem">{ele.node.podcastmeta.description}</Typography>
                  </Grid>
                  <Grid item justifySelf="flex-end">
                  <Button variant="outlined" color="error">Learn More</Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item alignSelf="center">
              <Grid container direction="column" spacing="0.5rem">
                <Grid item>
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
    // return (
    //   allPodcasts? allPodcasts.map((ele) => (
    //     <div key={ele.node.date}>
    //       <h1>{ele.node.title}</h1>
    //    </div>
    //   )):
    //   <p>Loading...</p>
    // )
}