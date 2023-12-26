import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  // null 값으로 useState 선택해서 상세보는 selectTodo, setSelectTodo

  // 버튼클릭시 보여줄 코드 작성

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/cafe')
      .then((response) => setTodos(response.data))
      .catch((error) => console.error('에러입니다.', error));
  }, []);

  return (
    <div>
      <h1>메뉴</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.ID}>
            {todo.NAME} / {todo.PRICE}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
