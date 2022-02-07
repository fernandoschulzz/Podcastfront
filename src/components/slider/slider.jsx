import React, { Component } from "react";
import Slider from "react-slick";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { getBlogs } from "../../actions";
import Blogs from "../blogs/blogs";
import style from "./slider.module.css"
import { Typography } from "@mui/material";

export default function Sliderblogs() {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs)

    useEffect(()=> {
        dispatch(getBlogs());
    return () => {
        dispatch(getBlogs())
    }
    },[dispatch])


    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className={style.main}>
        <Typography className={style.title}> Blog Posts</Typography>
        <div className={style.slider}>
        <Slider {...settings}>
        {blogs.length > 0
          ? blogs.map((ele) => (
            <div key={ele.node.date}>
              <Blogs ele={ele} />
            </div>
          ))
          : null}
        </Slider>
        </div>
      </div>
    );
  }
