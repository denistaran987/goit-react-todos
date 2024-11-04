import s from './App.module.css';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import TaskList from './TaskList/TaskList';
import initialTasks from '../tasks.json';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('');

  const addTask = newTask => {
    setTasks(prev => {
      return [...prev, newTask];
    });
  };

  const removeTask = remId => {
    setTasks(prev => {
      return prev.filter(task => task.id !== remId);
    });
  };

  const filterTask = tasks.filter(task => task.text.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className={s.container}>
      <Form onTask={addTask} />
      <Filter filter={filter} setFilter={setFilter} />
      <TaskList tasks={filterTask} removeTask={removeTask} />
    </div>
  );
}

export default App;
