import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // 데이터 가져오기
    axios
      .get('http://localhost:5000/api/todos') // 포트 번호 수정
      .then((response) => setTodos(response.data))
      .catch((error) => console.error('에러입니다.', error));
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo[0]}>{todo[1]}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

/*
import React, { useState, useEffect } from 'react';
import './App.css'; 
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // 데이터 가져오기
    fetch('http://localhost:5001/api/todos') // 포트 번호 수정
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo[0]}>
            {todo[1]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
*/
