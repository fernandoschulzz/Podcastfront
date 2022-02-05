import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import gql from "graphql-tag";
import {GET_PODCASTS, GET_PODCAST_BY_ID, GET_BLOGS, GET_TRENDINGEPISODE} from './contants'

export function getPodcasts() {
    return function(dispatch) {
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
                  description
                   author
                   categories
                   season
                   image
                   trendingEpisode
                 }
               }
             }
           }
         }
         
        `;
        
        client.query({query})
        .then(res => {
            return dispatch({
                type: GET_PODCASTS,
                payload: res.data.podcasts.edges})
        })
    }
}

export function getTrendingEpisode() {
    return function(dispatch) {
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
                   description
                   author
                   categories
                   season
                   image
                   trendingEpisode
                 }
               }
             }
           }
         }
         
        `;
        
        client.query({query})
        .then(res => {
            const trending = res.data.podcasts.edges.find(ele => ele.node.podcastmeta.trendingEpisode === true)
            return dispatch({
                type: GET_TRENDINGEPISODE,
                payload: trending})
        })
    }
}

