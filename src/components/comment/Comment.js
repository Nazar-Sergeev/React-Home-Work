export default function Comment({item: {name, body}}) {
    return (
        <div>
            <h2>{name}</h2>
            <div>{body}</div>
        </div>
    );
};

