import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', function () {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data)
});


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    extraReducers: function (builder) {
        builder.addCase(fetchUsers.pending, function (state) {
            state.loading = true;
        });

        builder.addCase(fetchUsers.fulfilled, function (state, action) {
            state.loading = false;
            state.users = action.payload;
            state.error = '';
        });

        builder.addCase(fetchUsers.rejected, function (state, action) {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        });
    },
});

export default userSlice.reducer

