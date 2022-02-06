import React, { Component } from "react";
import Slider from "react-slick";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { getBlogs } from "../../actions";
import Blogs from "../blogs/blogs";

export default function Sliderblogs() {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs)
    console.log(blogs)

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
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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
      <div>
        <h2> Blog Posts </h2>
        <Slider {...settings}>
        {blogs.length > 0
          ? blogs.map((ele) => (
            <div>
              <Blogs ele={ele} />
            </div>
          ))
          : null}
        </Slider>
      </div>
    );
  }
