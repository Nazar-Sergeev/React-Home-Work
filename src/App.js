import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Users from "./components/users/Users";
import {getUser, getUsers} from "./services/Api";
import UserDetails from "./components/user-details/UserDetails";


function App() {
    let [users, setUsers] = useState([]);
    let [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
    getUsers().then(response => {
        setUsers(response.data)
    })
    }, []);

    function selectUser(id) {
        console.log(id);
        getUser(id).then(value => setUserDetails(value.data))

    }

    return (
        <div>
            <Users items={users} selectUser={selectUser}/>
            <hr/>
            <UserDetails item={userDetails}/>
        </div>
    );
}


export default App;
