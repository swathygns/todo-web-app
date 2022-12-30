import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoItem } from './component/TodoItem';

function App() {
  let [todoItem,setTodoItem] = useState([   {
    "name":"Buy Milk",
    "status":"Complete",
    "id":1
},
{
    "name":"phone bill",
    "status":"active",
    "id":2
}])
  useEffect( () => {
     fetch('https://baodtkcmp4.execute-api.us-east-1.amazonaws.com/getTodoList')
    .then((response) => response.json())
    .then((data) => setTodoItem(data));
  },[])

  return (
    <div className="App">
      <p className = "mb-12 font-extrabold">Welcome!!</p>
      <div>
        <ul>
          <li className="flex break-normal mb-3">
              <label className="flex-1 font-bold">Select</label>
              <label className="flex-1 font-bold">Name</label>
              <label className="flex-1 font-bold">Status</label>
          </li>

          {
            todoItem.map((item) => {
              return (< TodoItem props = {item} />) 
            })
          }
        </ul>
      </div>
    </div>

  );
}

export default App;
