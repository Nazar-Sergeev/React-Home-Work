export default function Post({item:{title, body}}) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}