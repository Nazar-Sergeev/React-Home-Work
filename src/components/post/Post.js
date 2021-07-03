export default function Post({item: {title, body}}) {
    return (
        <div>
            <h2>{title}</h2>
            <div>{body}</div>
        </div>
    );
};