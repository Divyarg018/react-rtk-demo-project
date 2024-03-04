const configureStore = require('@reduxjs/toolkit').configureStore;
// const reduxLogger = require('redux-logger'); // Uncomment if you want to use the logger
const cakeReducer = require('../features/cake/cakeSlice.js');
const icecreamReducer = require('../features/icecream/icecreamSlice.js');
const userReducer = require('../features/user/userSlice.js');

// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Uncomment if you want to use the logger
});

module.exports = store;
