import {Link} from "react-router-dom";

export default function Post({item}) {

    return (
        <div>
            <h2>{item.title}</h2> * <Link to={'/posts/' + item.id}>details</Link>
        </div>
    );
}