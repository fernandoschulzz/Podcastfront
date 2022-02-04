import React from "react";
import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import gql from "graphql-tag";
import { Link } from "react-router-dom";

const client = new ApolloClient ({
    cache: new InMemoryCache({}),
    link: new HttpLink({
        uri: 'https://nicasource.local/graphql',
    })
    
  })
const query = gql`
{
   podcasts {
     edges {
       node {
         title
         date
         content
         podcastmeta {
           author
           categories
           season
           image
         }
       }
     }
   }
 }
 
`;

client.query({query})
.then(res => {
   console.log(res.data.podcasts.edges)
})


export default function Podcasts() {
    
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}