import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

let getUsers = () => axiosInstance();
let getUser = (id) => axiosInstance('/' + id);

export {getUsers, getUser};
