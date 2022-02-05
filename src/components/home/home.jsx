import React from "react"
import Podcasts from "../../Podcasts/Podcasts"
import Navbar from "../navbar/navbar"
import style from "./home.module.css"

export default function Home() {

    
      return (
       <div className={style.maincontainer}>
           <Podcasts></Podcasts>
       </div>
      )
  }