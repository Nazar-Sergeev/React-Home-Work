export default function Simpson({item: {name, surname, age, info, photo}}) {
    return (
        <div>
            <h2>{name} {surname}, age - {age}</h2>
            <img src={photo}
                 alt="simpson"/>
            <p>{info}</p>
        </div>
    );
}