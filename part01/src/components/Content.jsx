const Part = () => {
    <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
}

export default function Content(props) {
    return (
        <div>
            <p>
                {props.part} {props.exercises}
            </p>
        </div>
    );
}