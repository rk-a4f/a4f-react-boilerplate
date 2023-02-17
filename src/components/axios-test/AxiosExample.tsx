import React, { memo, useState } from 'react';
import axios from 'axios';

const AxiosExample: React.FC = () => {
  const [id, setId] = useState(1);
  const [todo, setTodo] = useState('');

  const fetchTodoById = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    setTodo(JSON.stringify(response.data));
  };

  const clickHandler = () => {
    setId(id + 1);
    fetchTodoById();
  };

  return (
    <div>
      <button onClick={clickHandler}>fetchTodoById</button>
      <div>{todo}</div>
    </div>
  );
};

export default memo(AxiosExample);
