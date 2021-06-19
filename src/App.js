import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask  from './components/AddTask';
import './index.css';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctor's Appointment",
        day: "05/02/2021",
        time: "2.30pm",
        reminder: true,
    },
    {
        id: 2,
        text: "Meeting at School",
        day: "06/02/2021",
        time: "1.30pm",
        reminder: true,
    },
    {
        id: 3,
        text: "Food Shopping",
        day: "05/02/2021",
        time: "22.30pm",
        reminder: false,
    }
  ]);
  const addTask = (task) => {
    const id = tasks[tasks.length-1].id + 1;
    const newTask = { id, ...task};
    setTasks([ ...tasks, newTask ]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter( t => t.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map( task => task.id === id ? {...task, reminder:!task.reminder} : task));
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
