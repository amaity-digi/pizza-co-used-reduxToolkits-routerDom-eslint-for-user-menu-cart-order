const { createSlice } = "@reduxjs/toolkit";


const initialState = {
    userName: '',
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        updateName(state, action){
            state.userName = action.payload;
        }
    }
});

export const {updateName} = userSlice.actions;

export default userSlice.reducers;

