import React, {useState} from 'react';
// import SquatTracker from './SquatTracker';

const WorkoutTracker = props => {
    const [state, setState] = useState({
        repPoints: 1,
        goalReps: 0
    });

    const increaseReps = () => {

    const newRepPoints = state.repPoints >= 100 ? 0 : state.repPoints + 1;

        setState({
            repPoints: newRepPoints,
            goalReps: state.goalReps
        });
    }

    const decreaseReps = () => {

        const newRepPoints = state.repPoints <= 0 ? 0 : state.repPoints - 1;
    
            setState({
                repPoints: newRepPoints,
                goalReps: state.goalReps
            });
        }

    const handleChange = e => {
        const newState = {
            repPoints: state.repPoints,
            goalReps: e.target.value
        }
        setState(newState)
    }

    return (
        <div>
            <input
                type="text"
                value={state.goalReps}
                onChange={e => handleChange(e)}
            />
            <p>Your rep goal is: {state.goalReps} reps.</p>

            <p>You have done: {state.repPoints} reps.</p>
            <button onClick={decreaseReps}>- 1</button>
            <button onClick={increaseReps}>+ 1</button>

        </div>
    )
}

export default WorkoutTracker;