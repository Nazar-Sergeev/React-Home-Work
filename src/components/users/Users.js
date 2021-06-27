import User from "../user/User";

export default function Users({items, selectUser}) {
    return (
        <div>
            {
                items.map(u=> <User item={u} selectUser={selectUser}/>)
            }
        </div>
    );
}