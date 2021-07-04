import {getUser, getUserPosts} from "../../services/API";
import {useState} from "react";

export default function User({item:{name, username, id}}) {
    let [posts, setPosts] = useState([]);

    return (
        <div>
            <h2>{name} - {username}</h2>
            <button onClick={() => {
                getUserPosts(id).then(value => setPosts([...value.data]))
            }
            }>DETAILS</button>

            {
                posts.map(value => <div>{value.title}</div>)
            }
        </div>
    );
}