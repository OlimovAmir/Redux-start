import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from '../redux/actions';

function Counts(props) {
    const counts = useSelector(state => state.counts);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        
        dispatch(incrementCounter());
      };
    
      const handleDecrement = () => {
        
        dispatch(decrementCounter());
      };
    return (
        <div>
        <button onClick={handleDecrement}>low</button>
        <button onClick={handleIncrement}>high</button>
        <p>number: {counts}</p>
      </div>
    )
}

export default Counts