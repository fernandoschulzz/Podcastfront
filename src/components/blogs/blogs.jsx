import { Button, Card, CardHeader, Grid, Typography } from "@mui/material";
import React from "react";
import style from "./blogs.module.css"

export default function Blogs({ele}) {

    return (
        <Card sx={{ maxWidth: 345 }}>
             <Grid container direction="column" spacing="3rem">
                 <Grid item marginTop="2rem">
                     <Grid container direction="row">
                     <Grid item>
                         <Grid container direction="column" borderLeft="4px solid red">
                         <Grid item marginLeft="2rem"><Typography>{ele.node.blogmeta.author}</Typography></Grid>
                         <Grid item marginLeft="2rem"><Typography>{ele.node.blogmeta.company}</Typography></Grid>
                         </Grid>
                     </Grid>
                     <Grid item><Typography>{ele.node.date}</Typography></Grid>
                     </Grid>
                 </Grid>
                 <Grid item className={style.text}><Typography>{ele.node.title}</Typography></Grid>
                 <Grid item className={style.text}><Typography>{ele.node.blogmeta.text}</Typography></Grid>
                 <Grid item className={style.text}>
                     <Button variant="outlined" color="error">Read More</Button>
                 </Grid>
             </Grid>
        </Card>
       
    )
}