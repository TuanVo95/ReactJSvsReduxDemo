import React, { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
//import {useSelector,useDispatch} from 'react-redux';
//import {increment,decrement} from './actions';

function App() {

  //const dispatch = useDispatch();
  //const counterState = useSelector(state => state.counter);
  //const isLogged = useSelector(state => state.isLogged);
   const myTodoList = [
      {id:0, title:"reactjs demo" },
      {id:1, title:"cakephp demo"  },
      {id:2, title:"ASP dotnet core demo" },
    ];

  const[todoList, setTodoList]= useState(myTodoList);

  function handleTodoclick(todo)
  {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if(index<0 ) return;
    const newTodoList = [...todoList];
     newTodoList.splice(index,1);
    setTodoList(newTodoList);
  }

 function handleTodoFormSubmit(formValues)
 {
   console.log('form values', formValues);
   const newTodoList = [...todoList];
   const newTodo= {
     id:Math.trunc(Math.random()*1000) + 1,
     ...formValues,
   };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
 }

  return (
    <div className="app">
      {/* <h1> counter {counterState} </h1>
      <button onClick={()=>dispatch(increment(5))}> + </button>
      <button onClick={()=>dispatch(decrement())} >-</button>
      <h1> Logged {isLogged===false?"Valuable Information I shouldn't see ":""} </h1> */}
      <ColorBox/>
      <TodoForm onToDoFormSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoclick} />
    </div>
  );
}

export default App;
