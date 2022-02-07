import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import style from "./form.module.css"
import axios from "axios";


export default function Form() {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    var bodyFormData = new FormData();
    bodyFormData.append('your-email', username);

    function validateUser(value) {
        if(!/\S+@\S+\.\S+/.test(value)) {
          setError('Please type a valid email');
        } else {
          setError('');
        }
        setUsername(value);
      }
      
     const handleSubmit = async function(e){
         e.preventDefault()
        var response = await axios.post("https://nicasource.local/wp-json/contact-form-7/v1/contact-forms/42/feedback", bodyFormData);
        alert(response.data.message);}


    return (
        <div className={style.main}>
        <Grid container direction="column" spacing="1rem">
            <Grid item ><Typography className={style.title}>New Episode Every Week!</Typography></Grid>
            <Grid item ><Typography className={style.subtitle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</Typography></Grid>
            <Grid item alignSelf="center">
                <Grid container direction="row">
                    <Grid item><TextField onChange={(e) => validateUser(e.target.value)} className={style.label} label="Type Your Email" variant="filled"></TextField></Grid>
                    <Grid item><Button onClick={(e)=> handleSubmit(e)} className={style.button} variant="contained" color="error">{<span className={style.text}>Subscribe</span>}</Button></Grid>
                </Grid>
            </Grid>
            <Grid item> {!error ? null : <Typography className={style.error}>{error}</Typography>}</Grid>
        </Grid>
        </div>
    )
}