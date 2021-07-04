import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import {getComment} from "../../services/Comments.service";
export default function CommentDetails() {
    let {id} = useParams();
    let [comment, setComment] = useState({});
    useEffect(() => {
        getComment(id).then(value => setComment({...value.data}))
    }, [id]);
    return (
        <div>
            {comment.body}
        </div>
    );
}