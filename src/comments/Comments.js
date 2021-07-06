import {useDispatch, useSelector} from "react-redux";
import Comment from "../comment/Comment";
import {useEffect} from "react";

export default function Comments() {
    const listComments = useSelector(({comments}) => comments);
    const dispatch = useDispatch();

    const getComments = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        dispatch({
            type:'SET_COMMENTS',
            payload: data
        })
    };
    useEffect(() => {
        getComments();
        }, []);

    return (
        <div>
            {
                listComments.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>    
    );
}