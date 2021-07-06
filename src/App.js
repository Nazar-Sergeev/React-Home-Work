import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Users from "./users/Users";
import Posts from "./posts/Posts";
import Comments from "./comments/Comments";

export default function App() {

    return (
        <Router>
            <div><Link to={'/'}>Home</Link></div>
            <div><Link to={'/users'}>Users page</Link></div>
            <div><Link to={'/posts'}>Posts page</Link></div>
            <div><Link to={'/comments'}>Comments page</Link></div>
            <Switch>
                <Route exact path={'/'} render={() => {
                    return <div>This is home page</div>
                }}/>
                <Route path={'/users'} component={Users}/>
                <Route path={'/posts'} component={Posts}/>
                <Route path={'/comments'} component={Comments}/>
            </Switch>
        </Router>
    );
}