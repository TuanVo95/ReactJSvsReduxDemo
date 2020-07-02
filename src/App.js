import React from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
//import {useSelector,useDispatch} from 'react-redux';
//import {increment,decrement} from './actions';

function App() {

  //const dispatch = useDispatch();
  //const counterState = useSelector(state => state.counter);
  //const isLogged = useSelector(state => state.isLogged);
  return (
    <div className="app">
      {/* <h1> counter {counterState} </h1>
      <button onClick={()=>dispatch(increment(5))}> + </button>
      <button onClick={()=>dispatch(decrement())} >-</button>
      <h1> Logged {isLogged===false?"Valuable Information I shouldn't see ":""} </h1> */}
      <ColorBox>
      </ColorBox>

    </div>
  );
}

export default App;
