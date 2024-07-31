import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/slices/userSlice';
import groupReducer from './redux/slices/groupSlice';
import taskReducer from './redux/slices/taskSlice';

const store = configureStore({
    reducer: {
        users: userReducer,
        groups: groupReducer,
        tasks: taskReducer,
    },
});

export default store;
