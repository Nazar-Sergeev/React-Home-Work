// import {useEffect, useState} from "react";
//
// export default function UserDetails(props) {
//     console.log(props);
//     let {location: {state}} = props;
//     let [user, setUser] = useState({});
//
//     useEffect(() => {
//         setUser({...state});
//     }, [state]);
//     return (
//         <div>
//             {
//                 user.username
//             }!!!!!!
//         </div>
//     );
// }



import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import {getUser} from "../../services/Users.service";
export default function UserDetails() {
    // let {match: {params: {id}}} = props;
    // console.log(id);
    let {id} = useParams();
    let [user, setUser] = useState({});
    useEffect(() => {
        getUser(id).then(value => setUser({...value.data}))
    }, [id]);
    return (
        <div>
            {user.id} - {user.username} - {user.email}
        </div>
    );
}