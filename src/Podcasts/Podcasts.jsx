import React from "react";
import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { getPodcasts } from "../actions";


export default function Podcasts() {

  const dispatch = useDispatch();
  const allPodcasts = useSelector((state) => state)
  
  useEffect(() => {
    dispatch(getPodcasts());
    return () => {
      dispatch(getPodcasts());
    };
  }, [dispatch]);


  console.log(allPodcasts&&allPodcasts.podcasts.edges)
    return (
      allPodcasts? allPodcasts.podcasts.edges.map((ele) => (
        <div key={ele.node.date}>
          <h1>{ele.node.title}</h1>
       </div>
      )): <p>Loading...</p>
    )
}