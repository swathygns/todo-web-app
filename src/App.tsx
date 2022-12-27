import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoItem } from './component/TodoItem';

function App() {
  let [todoItem,setTodoItem] = useState([])
  useEffect( () => {

     fetch('http://localhost:8080/todoItems/')
    .then((response) => response.json())
    .then((data) => setTodoItem(data));

  }

  )
  return (
    <div className="App">
      <p>Welcome!!</p>
      <div>
        <ul>
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
