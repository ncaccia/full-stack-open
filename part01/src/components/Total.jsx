export default function Total(props) {
    return (
        <div>
            <p>
                Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}
            </p>
        </div >
    );
}