import React, { useState } from 'react';
import './App.css';
import Checkbox from './stories/Checkbox';
import Input from './stories/Input';
import Radiobox from './stories/Radiobox';

function App() {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setValue(e.target.value);
    setX(e.target.value);
  };
  const onClick = () => {
    setValue('');
  };
  const [x, setX] = useState('1');
  const [s, setS] = useState('2');
  return (
    <div>
      <p>TEST:{value}</p>
      <Input label='안녕' value={value} onChange={onChange} onClick={onClick} />
      <Radiobox />
    </div>
  );
}

export default App;
