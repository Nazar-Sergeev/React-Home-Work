import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from "react-redux";
import {createStore} from "redux";

let initialState = {
    posts:[],
    users:[],
    comments:[]
}

let counterReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_USERS':{
            return {...state, users: action.payload}
        }
        case 'SET_POSTS': {
            return {...state, posts: action.payload}
        }
        case 'SET_COMMENTS':{
            return {...state, comments: action.payload}
        }
        default:{
            return state;
        }
    }

};

let store = createStore(counterReducer);

// console.log(store);
// console.log(store.getState());
//
//
// store.subscribe(() => {
//     console.log('from subscribe:', store.getState());
// });
//
// store.dispatch({
//     type: 'INC'
// })
// store.dispatch({
//     type: 'INC'
// })


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
