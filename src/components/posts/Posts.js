import {useEffect, useState} from "react";
import {getPosts} from "../../services/Posts.service";
import Post from "../post/Post";
import {Switch,Route} from 'react-router-dom';
import PostDetails from "../details/PostDetails";

export default function Posts() {

    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]))
    }, []);
    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
            <Switch>
                <Route path={'/posts/:id'} component={PostDetails}/>
            </Switch>
        </div>    
    );
}