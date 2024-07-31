import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const TodoUser = () => {
    const [show, setShow] = useState(false);
    const [userInput, setUserInput] = useState('');
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.userList);
    const navigate = useNavigate();

    const handleShow = () => {
        setShow(!show);
    };

    const handleAddUser = () => {
        if (userInput.trim()) {
            dispatch(addUser({ name: userInput }));
            setUserInput('');
        }
    };

    const handleUserClick = (user) => {
        navigate('/groups', { state: { userId: user.id, username: user.name } });
    };

    return (
        <div className="todo_user">
            <div className="top">
                <h4>Todo User</h4>
                <button className="add-group-btn" onClick={handleShow}>
                    Add User
                </button>
            </div>
            {show && (
                <div className="add_input">
                    <input
                        type="text"
                        placeholder='Enter the user name'
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                    />
                    <button className="add-user-btn" onClick={handleAddUser}>
                        Add
                    </button>
                </div>
            )}
            <div className="content">
                <ul>
                    {users.map((user) => (
                        <li key={user.id} onClick={() => handleUserClick(user)}>
                            <p>{user.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoUser;
