export default function User({item:{id, name}, selectUser}) {
    return (
        <div>
            {id} {name}
            <button onClick={()=> {
                selectUser(id)
            }
            }>Click Me</button>
        </div>
    );
}