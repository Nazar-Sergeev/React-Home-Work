import {useEffect, useState} from "react";

export default function Users() {

    let [usersList, setUsersList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsersList(value);

            });

    },[]);

    return (
        <div>
            {
                usersList.map(value =>
                    <div>
                    <h2>{value.id}* {value.username} - {value.name}</h2>
                    <div>{value.email}</div>
                    </div>)
            }
        </div>
    );
}

