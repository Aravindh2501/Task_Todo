import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addGroup } from '../redux/slices/groupSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const TodoGroup = () => {
    const [show, setShow] = useState(false);
    const [groupInput, setGroupInput] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const userId = location.state?.userId;
    const username = location.state?.username;
    const groups = useSelector((state) => state.groups.groups[userId] || []);

    const handleShow = () => {
        setShow(!show);
    };

    const handleAddGroup = () => {
        if (groupInput.trim()) {
            dispatch(addGroup({ userId, groupName: groupInput }));
            setGroupInput('');
        }
    };

    const handleGroupClick = (group) => {
        navigate('/todos', { state: { groupId: group.id, userId, username, groupname: group.groupName } });
    };

    return (
        <div className="todo_user">
            <h2 style={{ margin: "1rem 0rem" }}>Todo Group</h2>
            <div className="top">
                <p>User: {username}</p>
                <button className="add-group-btn" onClick={handleShow}>Add Group</button>
            </div>
            {show && (
                <div className="add_input">
                    <input
                        type="text"
                        placeholder='Enter the group name'
                        value={groupInput}
                        onChange={(e) => setGroupInput(e.target.value)}
                    />
                    <button className="add-user-btn" onClick={handleAddGroup}>Add</button>
                </div>
            )}
            <div className="content">
                <ul>
                    {groups.map((group) => (
                        <li key={group.id} onClick={() => handleGroupClick(group)}>
                            <p>{group.groupName}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoGroup;
