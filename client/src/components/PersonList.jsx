const Person = ({ person, onClose }) => {
    return (
        <div>
            <h1>Person Lists</h1>
            <div>
                <h2>{person.name}</h2>
                <div>
                    {person.address.street} {person.address.city}
                </div>
                <div>{person.phone}</div>
                <button onClick={onClose}>close</button>
            </div>
        </div>
    )
};

export default Person;