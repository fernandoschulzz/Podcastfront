import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import style from "./form.module.css"

export default function Form() {
    return (
        <div className={style.main}>
        <Grid container direction="column" spacing="1rem">
            <Grid item ><Typography className={style.title}>New Episode Every Week!</Typography></Grid>
            <Grid item ><Typography className={style.subtitle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</Typography></Grid>
            <Grid item alignSelf="center">
                <Grid container direction="row">
                    <Grid item><TextField className={style.label} label="Type Your Email" variant="filled"></TextField></Grid>
                    <Grid item><Button className={style.button} variant="contained" color="error">{<span className={style.text}>Subscribe</span>}</Button></Grid>
                </Grid>
            </Grid>
        </Grid>
        </div>
    )
}