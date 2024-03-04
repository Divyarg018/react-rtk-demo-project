const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const fetchUsers = createAsyncThunk('user/fetchUsers', function () {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            return response.data.map(function (user) {
                return user.id;
            });
        });
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

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers

