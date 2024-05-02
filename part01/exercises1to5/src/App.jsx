const Header = ({ course }) => {
  // console.log(props);
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
}

const Content = ({ parts }) => {
  // console.log(props.parts);
  return (
    <div>
      {parts.map((part, i) => (
        <p key={i}>{part.name}: {part.exercises} exercises </p>
      ))}
    </div>
  );
}

const Total = ({ parts }) => {
  // console.log(props.parts);
  const totalExercises = parts.reduce((accumulator, currentPart) => {
    return accumulator + currentPart.exercises
  }, 0)
  return (
    <div>
      <p>
        Number of exercises {totalExercises}
      </p>
    </div >
  );
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ]
  };
  return (
    <div>
      <Header course={course.name} />
      <Content
        parts={course.parts}
      />
      <Total
        parts={course.parts}
      />
    </div >
  )
}

export default App;

