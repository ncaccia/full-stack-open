const Total = ({ parts }) => {
    const totalExercises = parts.reduce((accumulator, currentPart) => {
        return accumulator + currentPart.exercises
    }, 0)
    return (
        <div>
            <p>
                <b>Total of {totalExercises} exercises</b>
            </p>
        </div >
    );
}

export default Total;