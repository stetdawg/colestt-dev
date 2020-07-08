import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './scss/structure.scss';
import './scss/index.scss';
import './scss/app.scss'

import './scss/shop.scss'
import './scss/nav.scss'
import './scss/special.scss'
import './scss/item-desc.scss'
import './scss/contact.scss';
import './scss/about.scss';
import './scss/combos.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';


//Wrap the root of the application in a Router
//Continue to Nav.js
ReactDOM.render(
  <React.StrictMode>
  <Router>
    <App />
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
