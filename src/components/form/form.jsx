import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";

export default function Form() {
    return (
        <Grid container direction="column">
            <Grid item><Typography>New Episode Every Week!</Typography></Grid>
            <Grid item><Typography>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</Typography></Grid>
            <Grid item>
                <Grid container direction="row">
                    <Grid item><TextField label="Type Your Email" variant="filled"></TextField></Grid>
                    <Grid item><Button variant="contained" color="error">Subscribe</Button></Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}