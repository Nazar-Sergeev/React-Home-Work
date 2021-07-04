import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import {getPost} from "../../services/Posts.service";
export default function PostDetails(){
    let {id} = useParams();
    let [post, setPost] = useState({});
    useEffect(() => {
        getPost(id).then(value => setPost({...value.data}))
    }, [id]);
    return (
        <div>
            {post.id} - {post.body}
        </div>
    );
}