import './App.css';
import Header from './components/Header.js';
import Tasks from './components/Tasks.js';
import AddTask from './components/AddTask.js';
import { useState } from 'react';

// Main Component: App
function App() {

// Hooks

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Shopping",
      day: "Feb 5th, 8:00AM",
      reminder: true
    },
    {
      id: 2,
      text: "Clean the House",
      day: "Feb 5th, 10:00AM",
      reminder: true
    },
    {
      id: 3,
      text: "Wash Car",
      day: "Feb 5th, 2:00PM",
      reminder: true
    }
  ]);
  const [showForm, setShowForm] = useState(false); // sets if the form is visible or not;

// Add Tasks
// Triggered when task is added;

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000);
    const newTask = { id, ...task};
    setTasks([...tasks, newTask]);
  }

// Delete Tasks
// Triggered once the X is clicked;

  const deleteTask = (id) => {
    console.log("deleteTask triggered");
    setTasks(tasks.filter((task) => {
      return task.id !== id;
    }));
  }

// Toggle reminder
// Triggered nce the task is double clicked;

  const toggleReminder = (id) => {
    console.log("toggleReminder triggered")
    setTasks(tasks.map((task) => {
      return task.id === id ? { ...task, reminder: !task.reminder} : task
    }))
  }

// JSX

  return (
    <div className="containerA">
      <div className="containerB">
        <Header title="React - Scheduler" onAdd={() => setShowForm(!showForm)} showForm={showForm}/>
        {showForm && <AddTask onAdd={addTask}/>}
        {
          tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} showForm={showForm}/> :
          <p className="caughtUp">You're all caught up!!!</p>
        }
      </div>
    </div>
  )
}

export default App;
