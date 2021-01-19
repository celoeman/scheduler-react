import { useState } from 'react';

const AddTask = ({ onAdd }) => {

// Hooks

  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

// On Submit
// Triggered when for is submitted

  const onSubmit = (e) => {
    e.preventDefault();

    if(!text) {
      window.alert("Please add task");
      return
    }

    onAdd({text, day, reminder})

    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <form className="mainForm" onSubmit={onSubmit}>
      <div className='inputGrouping'>
        <label>Event</label><br></br>
        <input
          className='inputs'
          type='text'
          placeholder='Schedule an event'
          onChange={(e) => setText(e.target.value)}
          value={text}
        ></input>
      </div>
      <div className='inputGrouping'>
        <label>Date & Time</label><br></br>
        <input
          className='inputs'
          type='text'
          placeholder='Add Day & Time'
          onChange={(e) => setDay(e.target.value)}
          item={day}
        ></input>
      </div>
      <div className='inputGrouping'>
        <label>Set Reminder</label><br></br>
        <input
          type='checkbox'
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        ></input>
      </div>
      <input className='formSave' type='submit' value='save'/>
    </form>
  )
}

export default AddTask;
