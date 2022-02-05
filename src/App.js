import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import style from './App.module.css'
import { ThemeProvider} from '@mui/material/styles';
import theme from './components/ui/theme';


const client = new ApolloClient ({
  cache: new InMemoryCache(),
  uri: 'https://nicasource.local/graphql',
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <BrowserRouter>
      <div className={style.header}>
        <header>
        <Navbar></Navbar>
        </header>
        <div>
          <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
