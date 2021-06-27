export default function UserDetails({item:{username, email}}) {
    return (
        <div>
            {username} - {email}
        </div>
    );
}