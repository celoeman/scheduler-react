import Task from './Task.js';

const Tasks = ({ tasks, onDelete, onToggle, showForm }) => {

  return (
    <div className={showForm ? 'tasksContainerFormOpen': 'tasksContainerFormClosed'}>
      {
        tasks.map((task) => {
          return (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
          )
        })
      }
    </div>
  )
}

export default Tasks
