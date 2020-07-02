import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducer from './reducers';
import {Provider} from 'react-redux';



const store = createStore(allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// //store -> globalized state

// //action increment
// const increment =()=>{
//   return {
//     type:'INCREMENT'
//   }
// }

// const decrement =()=>{
//   return {
//     type:'DECREMENT'
//   }
// }

// //reducer -> describes how yours action transform the state in to the next state 
// const counter =(state =0,action)=>{
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       break;
//   }
// }

// let store = createStore(counter);
// //display it in the console
// store.subscribe(()=> console.log(store.getState()));

// //dispatch -> sent action to the reducer, reducer check what to do , and then these store get update
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
