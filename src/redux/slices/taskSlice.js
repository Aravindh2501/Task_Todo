import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: {},
};

const taskSlice = createSlice({
    name: "Task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { groupId, taskName } = action.payload;
            if (!state.tasks[groupId]) {
                state.tasks[groupId] = [];
            }
            state.tasks[groupId].push({ id: Date.now(), taskName, isChecked: false });
        },
        toggleTask: (state, action) => {
            const { groupId, taskId } = action.payload;
            const tasks = state.tasks[groupId];
            const task = tasks.find((task) => task.id === taskId);
            if (task) {
                task.isChecked = !task.isChecked;
            }
        },
    },
});

export const { addTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
