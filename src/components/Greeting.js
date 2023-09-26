import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../reducers/greetingReducer';

function Greetings() {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div>
      <div>
        <h1>Random Greeting:</h1>
        <h2>
          Greeting form API:
          {greeting}
        </h2>
        <p> Please Refresh to get new greeting</p>
      </div>
    </div>
  );
}

export default Greetings;
