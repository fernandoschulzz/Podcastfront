import React from "react"
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import style from "./navbar.module.css"
import logo from '../images/huge.png'
const useStyles = makeStyles(theme =>({
  navbar: {
    paddingTop: "2rem",
    marginInlineEnd: '10%',
    marginInlineStart: '10%',
    maxWidth: '80%',
    height: "6.5rem"
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em"
  },
  logo: {
    height: "4.5rem"
  },
  tabcontainer: {
    marginLeft: '5rem',
  },
  tab: {
    ...theme.typography.tab,
  },
  button: {
    marginLeft: "10px !important",
    marginRight: "10px !important"
  },
  buttoncontainer: {
    marginLeft: 'auto'
  }
}))
   

export default function Navbar() {
  const classes = useStyles();
    
      return (
       <div className={style.appbar}>
          <AppBar className={classes.navbar}
          elevation={0}>
            <Toolbar disableGutters={true}>
              <img src={logo} alt="company logo" className={classes.logo}></img>
              <Tabs value={2} className={classes.tabcontainer} inkBarStyle={{background: 'blue'}}>
               <Tab label={<span className={classes.tab}>Home</span>}/>
              <Tab label={<span className={classes.tab}>About</span>}/>
                <Tab label={<span className={classes.tab}>Episodes</span>}/>
                <Tab label={<span className={classes.tab}>Blog</span>}/>
                <Tab label={<span className={classes.tab}>Contact</span>}/>
              </Tabs>
              <div className={classes.buttoncontainer}>
              <Button className={classes.button} variant="contained" color="error">Subscribe</Button>
              <Button className={classes.button} variant="outlined" color="error">{<span className={classes.tab}>Sing-in</span>}</Button>
              </div>
            </Toolbar>
          </AppBar>
          <div className={classes.toolbarMargin}></div>
       </div>
      )
  }
