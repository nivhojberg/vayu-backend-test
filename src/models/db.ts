import mongoose from 'mongoose';

console.log("connect to mongo");
mongoose.connect('mongodb://localhost:27017/VayuBackendTestDB').then(() => {
    console.log("Connection succeded");
}).catch((err) => {
    console.log("Error in connection", err);
});

import './user.model.js';
// require('./user.model');
