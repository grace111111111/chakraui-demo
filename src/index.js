import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import theme from '@chakra-ui/theme';

ReactDOM.render(
  <Router>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </Router>,
  document.getElementById('root')
);
