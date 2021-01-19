import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {

  return (
    <div className={`task ${task.reminder ? 'noReminder' : 'reminder'}`} onDoubleClick={() => onToggle(task.id)}>
      <h3 className='taskItem'>{task.text} <FaTimes className="icon_x" onClick={() => onDelete(task.id)}/></h3>
      <p className='taskDate'>{task.day}</p>
    </div>
  )
}

export default Task;
