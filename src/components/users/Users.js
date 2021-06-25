import {useEffect, useState} from "react";

export default function Users() {

    let [usersList, setUsersList] = useState([]);

    // let usersList = state[0];
    // let setUsersList = state[1];

useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json())
                .then(response => {
                    setUsersList(response);
                });
}, []);
    return (
        <div>
            {
                usersList.map(value => <h2>{value.id} - {value.name}</h2>)
            }
        </div>
    );
}

