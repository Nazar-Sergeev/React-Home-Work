import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Users from "./components/users/Users";
export default function App() {
    return (
        <Router>
            <div><Link to={'/'}>Home</Link></div>
            <div><Link to={'/users'}>Users Page</Link></div>
            <Switch>
                <Route exact path={'/'} render={() => {
                    return <div>Home</div>
                }}/>
                <Route path={'/users'} component={Users}/>
            </Switch>
        </Router>
    );
}