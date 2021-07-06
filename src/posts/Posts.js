import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Post from "../post/Post";

export default function Posts() {
    const listPosts = useSelector(({posts}) => posts)
    const dispatch = useDispatch();

    const getPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

    dispatch({
        type: 'SET_POSTS',
        payload: data
        })
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            {
                listPosts.map(value => <Post key={value.id} item={value}/>)
            }
        </div>    
    );
}