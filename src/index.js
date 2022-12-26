import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

axios.defaults.baseURL = process.env.REACT_APP_API;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  // </React.StrictMode>,
);
