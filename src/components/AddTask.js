import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');
    const [reminder, setReminder] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert("Please add a task");
            return;
        }
        else if(!day){
            alert("Please add day");
            return;
        }
        else if(!time){
            alert("Please add time");
            return;
        }
        onAdd({ text, day, time, reminder });

        setText('');
        setDay('');
        setTime('');
        setReminder(false);
    }    
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Day</label>
                <input type="text" placeholder="DD/MM/YYYY" value={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Time</label>
                <input type="text" placeholder="Add Time" value={time} onChange={(e) => setTime(e.target.value)}></input>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask;
