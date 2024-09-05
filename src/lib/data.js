// TEMPORARY DATA

// const users = [
//     {id:1, name: 'Rodney'},
//     {id:2, name: 'Lei'},
// ]

// const posts = [
//     {id:1, title: 'Yeah buddy', body: 'Like weight baby', userId: 1},
//     {id:2, title: 'Putangina', body: 'Tanginang yan', userId: 2},
//     {id:3, title: 'Wohoi', body: 'gegeegg', userId: 3},
//     {id:2, title: 'Joke', body: 'hehehe', userId: 4},
// ]

import {Post, User} from './models';
import { connectToDb } from './utils';

export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (err) {
        console.log('Error: ', err);
        // throw new Error("Failed to fetch posts");   
    }
};

export const getPost = async (slug) => {
    try {
        connectToDb();
        const post = await Post.find({slug});
        return post;
    } catch (err) {
        console.log('Error: ', err);
        // throw new Error("Failed to fetch posts");   
    }
};

export const getUser = async (id) => {
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log('Error: ', err);
        // throw new Error("Failed to fetch users");   
    }
}

export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (err) {
        console.log('Error: ', err);
        throw new Error("Failed to fetch users");   
    }
}