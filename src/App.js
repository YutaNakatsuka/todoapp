import { useState } from 'react';
import './App.css';
import { InputForm } from './compornents/InputForm';
import { Title } from "./compornents/Title"
import { TodoList } from './compornents/TodoList';


function App() {
  const [taskList, setTaskList] = useState([])

  return <div className='body'>
    <Title />
    <InputForm taskList={taskList} setTaskList={setTaskList} />
    <TodoList taskList={taskList} setTaskList={setTaskList} />
  </div>;
}

export default App;
