import React, {useState} from 'react';

const SquatTracker = props => {
    const [state, setState] = useState({
        squatPoints: 1,
    });

    const increaseSquats = () => {

    const newSquatPoints = state.squatPoints >= 100 ? 0 : state.squatPoints + 1;

        setState({
            repPoints: newSquatPoints
        });
    }

    const decreaseSquats = () => {

        const newRepPoints = state.squatPoints <= 0 ? 0 : state.squatPoints - 1;
    
            setState({
                squatPoints: newSquatPoints
            });
        }

        return (
            <div>
                <p>Your rep goal is: {state.goalReps} reps.</p>
    
                <p>You have done: {state.repPoints} reps.</p>
                <button onClick={decreaseReps}>- 1</button>
                <button onClick={increaseReps}>+ 1</button>
    
            </div>
        )
}