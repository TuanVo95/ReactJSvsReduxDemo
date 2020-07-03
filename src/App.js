import React, { useState, useEffect } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList/Index';
import Pagination from './components/Pagination';
//import {useSelector,useDispatch} from 'react-redux';
//import {increment,decrement} from './actions';

function App() {

  //const dispatch = useDispatch();
  //const counterState = useSelector(state => state.counter);
  //const isLogged = useSelector(state => state.isLogged);

  //    const myTodoList = [
  //       {id:0, title:"reactjs demo" },
  //       {id:1, title:"cakephp demo"  },
  //       {id:2, title:"ASP dotnet core demo" },
  //     ];

  //   const[todoList, setTodoList]= useState(myTodoList);

  //   function handleTodoclick(todo)
  //   {
  //     console.log(todo);
  //     const index = todoList.findIndex(x => x.id === todo.id);
  //     if(index<0 ) return;
  //     const newTodoList = [...todoList];
  //      newTodoList.splice(index,1);
  //     setTodoList(newTodoList);
  //   }

  //  function handleTodoFormSubmit(formValues)
  //  {
  //    console.log('form values', formValues);
  //    const newTodoList = [...todoList];
  //    const newTodo= {
  //      id:Math.trunc(Math.random()*1000) + 1,
  //      ...formValues,
  //    };
  //     newTodoList.push(newTodo);
  //     setTodoList(newTodoList);
  //  }

  const [postList, setPostList] = useState([]);
  const [pagination, setpagination] = useState({
    _page:1,
    litmit:10,
    _totalRows:50
  });

  function handlePageChange(newpage)
  {
      console.log('New page', newpage);
  } 

  useEffect(()=>{
    async function getPostData()
    {
      try {
        const  requestUrl='http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await fetch(requestUrl);
        const responseJson = await response.json();
        const {data} = responseJson;
        setPostList(data);
        console.log("get post list");
      } catch (error) {
        console.log("Failed to fetch post list", error.message);
      }
    }
    getPostData();
  },[]);

  useEffect(()=>{
    console.log("get to do list");
  });

  return (
    <div className="app">
      {/* <h1> counter {counterState} </h1>
      <button onClick={()=>dispatch(increment(5))}> + </button>
      <button onClick={()=>dispatch(decrement())} >-</button>
      <h1> Logged {isLogged===false?"Valuable Information I shouldn't see ":""} </h1> */}
      {/* <ColorBox/>
      <TodoForm onToDoFormSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoclick} /> */}
     <PostList posts={postList} ></PostList>
     <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
