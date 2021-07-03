import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

export default function App() {
    return (
        <Router>
                <div><Link to={'/'}>Home</Link></div>
                <div><Link to={'/users'}>Users Page</Link></div>
                <div><Link to={'/posts'}>Posts Page</Link></div>
                <div><Link to={'/comments'}>Comments Page</Link></div>

                <Switch>
                    <Route exact path={'/'} render={() => {
                    return <div>Home</div>
                }}/>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/posts'} component={Posts}/>
                    <Route path={'/comments'} component={Comments}/>
                </Switch>

        </Router>
    );
}








