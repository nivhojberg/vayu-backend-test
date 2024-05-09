import mongoose from 'mongoose';

const User = mongoose.model('User');

export const getAllUsers = async (limit: number, offset: number) => {
    return await User.find().limit(limit).skip(offset);
};

export const getUsersByName = async (name: string) => {
    return await User.find({ name });
};

export const getUsersByEmail = async (email: string) => {
    return await User.find({ email });
};
