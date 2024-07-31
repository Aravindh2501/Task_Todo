import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoUser from '../components/TodoUser';
import TodoGroup from '../components/TodoGroup';
import TodoList from '../components/TodoList';
import TodoMain from '../components/TodoMain';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TodoMain />} >
                    <Route index element={<TodoUser />} />
                    <Route path="/groups" element={<TodoGroup />} />
                    <Route path="/todos" element={<TodoList />} />
                </Route>
            </Routes>
        </Router>
    );
};


export default AppRoutes;
