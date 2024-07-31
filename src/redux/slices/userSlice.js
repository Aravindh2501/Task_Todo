import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userList: [],
    id: 1,
};

const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const newUser = {
                id: state.id,
                name: action.payload.name,
                groups: [],
            };
            state.userList.push(newUser);
            state.id += 1;
        },
        setUser: (state, action) => {
            state.userList = action.payload;
        },
    },
});

export const { addUser, setUser } = userSlice.actions;

export default userSlice.reducer;
