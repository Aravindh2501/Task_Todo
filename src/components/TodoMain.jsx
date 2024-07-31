import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const TodoMain = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        navigate(-1);
    };

    const isTodoUser = location.pathname === '/';

    return (
        <div className='Todo'>
            <div className="card">
                {!isTodoUser && (
                    <div className="">
                        <button onClick={handleBack}>Back</button>
                    </div>
                )}
                <Outlet />
            </div>
        </div>
    );
};

export default TodoMain;
