import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, toggleTask } from '../redux/slices/taskSlice';
import { useLocation } from 'react-router-dom';

const TodoList = () => {
    const [show, setShow] = useState(false);
    const [taskInput, setTaskInput] = useState('');
    const dispatch = useDispatch();
    const location = useLocation();
    const groupId = location.state?.groupId;
    const username = location.state?.username;
    const groupname = location.state?.groupname;
    const tasks = useSelector((state) => state.tasks.tasks[groupId] || []);

    const handleShow = () => {
        setShow(!show);
    };

    const handleAddTask = () => {
        if (taskInput.trim()) {
            dispatch(addTask({ groupId, taskName: taskInput }));
            setTaskInput('');
        }
    };

    return (
        <div className="todo_user">
            <h2 style={{ margin: "1rem 0rem" }}>Todo List</h2>
            <div className="top">
                <div className="">
                    <p>User: {username}</p>
                    <p>Group: {groupname}</p>
                </div>
                <button className="add-group-btn" onClick={handleShow}>Add Task</button>
            </div>
            {show && (
                <div className="add_input">
                    <input
                        type="text"
                        placeholder='Enter the task'
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                    />
                    <button className="add-user-btn" onClick={handleAddTask}>Add</button>
                </div>
            )}
            <div className="content">
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id} style={{ display: "flex", alignItems: "center" }}>
                            <div className="" style={{ display: "flex", alignItems: "center" }}>
                                <input
                                    type="checkbox"
                                    checked={task.isChecked}
                                    onChange={() => dispatch(toggleTask({ groupId, taskId: task.id }))}
                                />
                            </div>
                            <p style={{ textDecoration: task.isChecked ? 'line-through' : 'none', opacity: task.isChecked ? '0.5' : '1', marginLeft: "8px" }}>
                                {task.taskName}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
