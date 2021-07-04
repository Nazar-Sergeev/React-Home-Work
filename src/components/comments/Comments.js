import {useEffect, useState} from "react";
import {getComments} from "../../services/Comments.service";
import Comment from "../comment/Comment";
import {Switch, Route} from 'react-router-dom';
import CommentDetails from "../details/CommentDetails";
export default function Comments() {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(value => setComments([...value.data]))
    }, []);
    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} item={value}/>)
            }
            <Switch>
                <Route path={'/comments/:id'} component={CommentDetails}/>
            </Switch>

        </div>    
    );
}