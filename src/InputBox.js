import React, { useState } from 'react';
import './style.css';
import TextView from './TextView';

export default function InputBox() {
  const [name, setName] = useState('');
  const [data, setData] = useState('');

  const onInputChange = event => {
    setName(event.target.value);
  };
  const onSubmit = () => {
    setData(name);
  };

  return (
    <div>
      <input type="text" name="name" value={name} onChange={onInputChange} />
      <button onClick={onSubmit}>Submit</button>
      <TextView abc={data} />{' '}
    </div>
  );
}
