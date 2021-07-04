import {useEffect} from "react";
import {getUserPosts} from "../../services/API";

export default function Posts() {

    useEffect(() => {
        getUserPosts().then(value => console.log(value.data))
    }, []);
    return (
        <div>
            Posts
        </div>    
    );
}