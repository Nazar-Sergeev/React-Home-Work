export default function User({item:{username, name}}) {
    return (
        <div>
            <h2>{username} - {name}</h2>
        </div>
    );
}