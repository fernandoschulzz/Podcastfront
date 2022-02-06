import React from "react"
import Blogs from "../blogs/blogs"
import Podcasts from "../Podcasts/Podcasts"
import TrendingEpisode from "../Podcasts/trendingepisode"
import style from "./home.module.css"
import Slider from "../slider/slider"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Gallery from "../gallery/gallery"

export default function Home() {

    
      return (
       <div className={style.maincontainer}>
           <TrendingEpisode></TrendingEpisode>
           <Podcasts></Podcasts>
           <Slider></Slider>
           <Gallery></Gallery>
       </div>
      )
  }