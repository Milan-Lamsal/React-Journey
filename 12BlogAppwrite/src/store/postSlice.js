import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    loading: false,
    error: null,
    currentPost: null
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        updatePost: (state, action) => {
            const index = state.posts.findIndex(post => post.$id === action.payload.$id);
            if (index !== -1) {
                state.posts[index] = action.payload;
            }
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter(post => post.$id !== action.payload);
        },
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { 
    setPosts, 
    addPost, 
    updatePost, 
    removePost, 
    setCurrentPost,
    setLoading,
    setError
} = postSlice.actions;

export default postSlice.reducer; 