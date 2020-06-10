import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import { createLogger } from 'redux-logger'


import './index.css';
import App from './Controller/App';
import * as serviceWorker from './ServiceWorker/serviceWorker';

import reducer from "./store/reducers/auth"

import 'bootstrap/dist/css/bootstrap.min.css';

require('typeface-muli')

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const thunk = store => next => action =>
    typeof action === 'function'
        ? action(store.dispatch, store.getState)
        : next(action)

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, createLogger())))


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById( 'root' ) );
serviceWorker.unregister();











// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
//
// import { BrowserRouter } from 'react-router-dom';
//
// import { Provider} from 'react-redux';
// import { createStore, applyMiddleware, compose} from 'redux';
// import {thunk} from 'redux-funk'
//
//
// import App from './Controller/App';
// import * as serviceWorker from './ServiceWorker/serviceWorker';
//
// // we need to import the boostrap css
// import 'bootstrap/dist/css/bootstrap.min.css';
//
// require('typeface-muli')
//
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
//
// const store = createStore(composeEnhancers(
//     applyMiddleware(thunk)
// ));
//
// // in the root element, render what components we need
// ReactDOM.render(
//   // <React.StrictMode>
//       <Provider store={store}>
//           <BrowserRouter>
//               <App />
//           </BrowserRouter>
//       </Provider>,
//   // </React.StrictMode>,
//   document.getElementById('root')
// );
//
// serviceWorker.unregister();