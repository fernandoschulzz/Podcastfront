import React from "react"
import Podcasts from "../Podcasts/Podcasts"
import TrendingEpisode from "../Podcasts/trendingepisode"
import Navbar from "../navbar/navbar"
import style from "./home.module.css"

export default function Home() {

    
      return (
       <div className={style.maincontainer}>
           <TrendingEpisode></TrendingEpisode>
           <Podcasts></Podcasts>
       </div>
      )
  }