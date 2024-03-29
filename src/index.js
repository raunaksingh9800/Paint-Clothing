import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import reportWebVitals from './reportWebVitals';
import '@mantine/carousel/styles.css';

import { ModalsProvider } from '@mantine/modals';

const theme = createTheme({
  /** Put your mantine theme override here */
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme='light'>
    <ModalsProvider>
      <App />
     </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
