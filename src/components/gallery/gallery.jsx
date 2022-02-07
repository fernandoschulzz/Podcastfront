import React from "react";
import { Grid, Typography } from "@mui/material";
import style from "./gallery.module.css"
import {useSelector} from "react-redux"

export default function Gallery() {

    const allPodcasts = useSelector(state => state.podcasts)
    const images = allPodcasts&&allPodcasts.map(ele =>({
        image: ele.node.podcastmeta.image
    }))
    return (
        
        <div className={style.main}>
        <Typography className={style.title}>Our Gallery</Typography>
        <Grid container direction="row" justifyContent="center">
            <Grid item>
                <Grid container direction="column">
                    <Grid item >{images.length>0?<img src={images[0].image} alt="gallery-image" className={style.imageOne}/>:null}</Grid>
                    <Grid item >{images.length>0?<img src={images[1].image} alt="gallery-image" className={style.imageOne}/>:null}</Grid>
                    <Grid item >{images.length>0?<img src={images[2].image} alt="gallery-image" className={style.imageOne}/>:null}</Grid>
                </Grid>
            </Grid>
            <Grid item>
            <Grid container direction="column">
                    <Grid item >{images.length>0?<img src={images[3].image} alt="gallery-image" className={style.imageTwo}/>:null}</Grid>
                    <Grid item >{images.length>0?<img src={images[4].image} alt="gallery-image" className={style.imageOne}/>:null}</Grid>
                </Grid>
            </Grid>
            <Grid item>
            <Grid container direction="column">
                    <Grid item >{images.length>0?<img src={images[5].image} alt="gallery-image" className={style.imageOne}/>:null}</Grid>
                    <Grid item >{images.length>0?<img src={images[6].image} alt="gallery-image" className={style.imageOne}/>:null}</Grid>
                    <Grid item >{images.length>0?<img src={images[7].image} alt="gallery-image" className={style.imageOne}/>:null}</Grid>
                </Grid>
            </Grid>
            <Grid item>
            <Grid container direction="column">
                    <Grid item >{images.length>0?<img src={images[8].image} alt="gallery-image" className={style.imageTwo}/>:null}</Grid>
                    <Grid item >{images.length>0?<img src={images[9].image} alt="gallery-image" className={style.imageOne}/>:null}</Grid>
                </Grid>
            </Grid>
        </Grid>
        </div>
        )
}