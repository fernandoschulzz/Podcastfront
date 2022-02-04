import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Podcasts from './Podcasts/Podcasts';
import Podcast from './Podcasts/Podcast'


const client = new ApolloClient ({
  cache: new InMemoryCache(),
  uri: 'https://nicasource.local/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <div>
        <header>
          <h1>Podcast site</h1>
        </header>
        <div>
          <Routes>
          <Route exact path='/' component={Podcast}></Route>
          <Route exact path='/podcasts' component={Podcasts}></Route>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
