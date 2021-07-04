import {useEffect, useState} from "react";
import {getUsers} from "../../services/Users.service";
import User from "../user/User";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import UserDetails from "../details/UserDetails";
export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]));
    }, []);
    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
            <Switch>
                <Route path={'/users/:id'} component={UserDetails}/>

            </Switch>
        </div>
    );
}