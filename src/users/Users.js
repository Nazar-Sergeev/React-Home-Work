import {useEffect} from "react";
import User from "../user/User";
import {useDispatch, useSelector} from "react-redux";

export default function Users() {

    const listUsers = useSelector(({users}) => users);

    const dispatch = useDispatch();

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

    dispatch({
        type: 'SET_USERS',
        payload: data

         });
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            {
                listUsers.map(value => <User key={value.id} item={value}/>)
            }
        </div>
    );
}