import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/VayuBackendTestDB').then(() => {
    console.log("Connection succeded");
}).catch((err) => {
    console.log("Error in connection", err);
});

import './user.model.js';
