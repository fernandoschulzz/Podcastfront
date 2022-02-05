import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { getPodcasts } from "../../actions";


export default function Podcasts() {

  const dispatch = useDispatch();
  const allPodcasts = useSelector(state => state.podcasts)
  // console.log(allPodcasts)
  
  useEffect(() => {
    dispatch(getPodcasts());
    return () => {
      dispatch(getPodcasts());
    };
  }, [dispatch]);


    return (
      allPodcasts? allPodcasts.map((ele) => (
        <div key={ele.node.date}>
          <h1>{ele.node.title}</h1>
       </div>
      )):
      <p>Loading...</p>
    )
}