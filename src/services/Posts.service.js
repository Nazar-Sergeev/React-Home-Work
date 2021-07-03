import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

let getPosts = () => axiosInstance('');
let getPost = (id) => axiosInstance('/' + id);

export {getPost, getPosts};