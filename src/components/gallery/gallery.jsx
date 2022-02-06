import React from "react";
import { Grid, Typography } from "@mui/material";
import style from "./gallery.module.css"

export default function Gallery() {
 const img = "https://i.postimg.cc/yYp5TG07/coding-and-testing-programming-of-software.jpg"

    return (
        <React.Fragment>
        <Typography>Our Gallery</Typography>
        <Grid container direction="row">
            <Grid item>
                <Grid container direction="column">
                    <Grid item ><img src={img} alt="" className={style.imageOne}/></Grid>
                    <Grid item ><img src={img} alt="" className={style.imageOne}/></Grid>
                    <Grid item ><img src={img} alt="" className={style.imageOne}/></Grid>
                </Grid>
            </Grid>
            <Grid item>
            <Grid container direction="column">
                    <Grid item ><img src={img} alt="" className={style.imageTwo}/></Grid>
                    <Grid item ><img src={img} alt="" className={style.imageOne}/></Grid>
                </Grid>
            </Grid>
            <Grid item>
            <Grid container direction="column">
                    <Grid item ><img src={img} alt="" className={style.imageOne}/></Grid>
                    <Grid item ><img src={img} alt="" className={style.imageOne}/></Grid>
                    <Grid item ><img src={img} alt="" className={style.imageOne}/></Grid>
                </Grid>
            </Grid>
            <Grid item>
            <Grid container direction="column">
                    <Grid item ><img src={img} alt="" className={style.imageTwo}/></Grid>
                    <Grid item ><img src={img} alt="" className={style.imageOne}/></Grid>
                </Grid>
            </Grid>
        </Grid>
        </React.Fragment>
    )
}