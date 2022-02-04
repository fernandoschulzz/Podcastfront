import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import gql from "graphql-tag";
import {GET_PODCASTS, GET_PODCAST_BY_ID, GET_BLOGS} from './contants'

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
            return dispatch({
                type: GET_PODCASTS,
                payload: res.data.podcasts})
        })
    }
}