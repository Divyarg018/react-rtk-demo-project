import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger'); // Uncomment if you want to use the logger
import cakeReducer from '../features/cake/cakeSlice.js';
import icecreamReducer from '../features/icecream/icecreamSlice.js';
import userReducer from '../features/user/userSlice.js';

// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Uncomment if you want to use the logger
});

export default store;
