const Part = ({ part }) => {
    return (
        <li>{part.name}: {part.exercises} exercises</li>
    );
}

export default Part;