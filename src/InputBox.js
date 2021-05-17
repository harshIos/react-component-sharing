import React, { useState } from 'react';
import './style.css';
import TextView from './TextView';

export default function InputBox() {
  const [counter, setCounter] = useState(0);
  const [errorMessage, setErrorMessage] = useState(false);

  const onPlus = () => {
    setCounter(prevCounter => prevCounter + 1);
    if (counter >= 0) {
      setErrorMessage(false);
    }
  };

  const onMinus = () => {
    if (counter != 0) {
      setCounter(prevCounter => prevCounter - 1);
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <div>
      <button onClick={onPlus}>Plus</button>
      <button onClick={onMinus}>Minus</button>
      {errorMessage && <p>Should not be less than 0</p>}
      <TextView name={counter} />{' '}
    </div>
  );
}
