import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    groups: {},
};

const groupSlice = createSlice({
    name: "Group",
    initialState,
    reducers: {
        addGroup: (state, action) => {
            const { userId, groupName } = action.payload;
            if (!state.groups[userId]) {
                state.groups[userId] = [];
            }
            state.groups[userId].push({ id: Date.now(), groupName, tasks: [] });
        },
    },
});

export const { addGroup } = groupSlice.actions;
export default groupSlice.reducer;
