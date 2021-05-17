import React, { useState } from 'react';
import './style.css';
import TextView from './TextView';

export default function InputBox() {
  const [name, setName] = useState('');
  const [data, setData] = useState('');

  const handleChange = event => {
    setName(event.target.value);
  };
  const onSubmit = () => {
    setData(name);
  };

  return (
    <div>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <input name="firstName" value={name} />
      <button onClick={onSubmit}>Submit</button>
      <TextView name={name} />{' '}
    </div>
  );
}
