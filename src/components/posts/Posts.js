import {useEffect, useState} from "react";

export default function Posts() {

    let [postsList, setPostsList] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                console.log(value);
                setPostsList(value);
            });

    }, []);

    return (
        <div>
            {
                postsList.map(value => <div>
                    <h3>{value.id}* {value.title}</h3>
                <div>{value.body}</div>
                </div>)
            }
        </div>
    );
}