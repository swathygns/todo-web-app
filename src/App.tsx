import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoItem } from './component/TodoItem';
const items = [
  {
    "name":"Buy Milk",
    "status":"Complete",
    "id":1
  },
  {
    "name":"phone bill",
    "status":"active",
    "id":2
  }
]
function App() {
  return (
    <div className="App">
      <p>Welcome!!</p>
      <div>
        <ul>
          {
            items.map((item) => {
              return (< TodoItem props = {item} />) 
            })
          }
        </ul>
      </div>
    </div>

  );
}

export default App;
