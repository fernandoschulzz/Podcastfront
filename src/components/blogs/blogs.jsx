import { Button, Card, CardHeader, Grid, Typography } from "@mui/material";
import React from "react";
import style from "./blogs.module.css"

export default function Blogs({ele}) {

    return (
        <Card sx={{ maxWidth: 345, minHeight: 420, maxHeight: 420, margin: "10px"}}>
             <Grid container direction="column" spacing="2rem" height="100%">
                 <Grid item marginTop="2rem">
                     <Grid container direction="row">
                     <Grid item>
                         <Grid container direction="column" borderLeft="4px solid red">
                         <Grid item><Typography className={style.authorname}>{ele.node.blogmeta.author}</Typography></Grid>
                         <Grid item><Typography className={style.company}>{ele.node.blogmeta.company}</Typography></Grid>
                         </Grid>
                     </Grid>
                     <Grid item><Typography className={style.date}>{ele.node.date.slice(0,7)}</Typography></Grid>
                     </Grid>
                 </Grid>
                 <Grid item ><Typography className={style.title}>{ele.node.title}</Typography></Grid>
                 <Grid item className={style.text}><Typography>{ele.node.blogmeta.text.split(",").pop()}</Typography></Grid>
                 <Grid item className={style.button}>
                     <Button variant="outlined" color="error">Read More</Button>
                 </Grid>
             </Grid>
        </Card>
       
    )
}