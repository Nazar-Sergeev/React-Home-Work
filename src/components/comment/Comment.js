import {Link} from 'react-router-dom';
export default function Comment({item}) {
    return (
        <div>
            {item.name} - {item.email}
            <hr/>
            <Link to={'/comments/' + item.id}>details</Link>
        </div>
    );
}