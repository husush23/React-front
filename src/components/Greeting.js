import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../reducers/greetingReducer';

function Greetings() {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greeting);
  console.log(greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div className="greeting">
      <div>
        <h1>Random Greeting from the API:👇🏻</h1>
        <h2>{greeting}</h2>
        <small>If you like to see new greeting refresh the page</small>
      </div>
    </div>
  );
}

export default Greetings;
