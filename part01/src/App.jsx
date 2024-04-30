const Header = (props) => {
  // console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
}

const Content = (props) => {
  // console.log(props.parts);
  return (
    <div>
      {props.parts.map((part, i) => (
        <p key={i}>{part.name}: {part.exercises} exercises </p>
      ))}
    </div>
  );
}

const Total = (props) => {
  // console.log(props.parts);
  const totalExercises = props.parts.reduce((accumulator, currentPart) => {
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

export default App