import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Body from './Body';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Body />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
