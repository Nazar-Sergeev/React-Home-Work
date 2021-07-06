export default function User({item:{name, username}}) {
    return (
        <div>
            <h2>{username} - {name}</h2>

        </div>
    );
}