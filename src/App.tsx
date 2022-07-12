import React, { useState } from 'react';
import './App.css';
import Input from './stories/Input';

function App() {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onClick = () => {
    setValue('');
  };
  return (
    <div>
      <p>TEST:{value}</p>
      <Input label='안녕' value={value} onChange={onChange} onClick={onClick} />
    </div>
  );
}

export default App;
