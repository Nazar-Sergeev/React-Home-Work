import {Link} from 'react-router-dom';

export default function User({item}) {

    return (
        <div>

            {item.name} - {item.username} - <Link to={'/users/' + item.id}>details</Link>

        {/*    {item.name} - {item.username} - <Link to={*/}
        {/*    {*/}
        {/*        pathname: '/users/' + item.id,*/}
        {/*        state: item*/}
        {/*    }*/}

        {/*}>details</Link>*/}
        </div>
    );
}