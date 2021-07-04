import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

let getUsers = () => axiosInstance('');
let getUser = (id) => axiosInstance('/' + id);
let getUserPosts = (id) => axiosInstance('/' + id + '/posts');

export {getUsers, getUser, getUserPosts};
