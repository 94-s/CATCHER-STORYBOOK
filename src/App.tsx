import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Checkbox from './stories/Checkbox';
import Input from './stories/Input';
import Radiobox from './stories/Radiobox';
import Toggle from './stories/Toggle';
import Colors from './themes/color';

function App() {
  const [value, setValue] = useState(false);

  const onClick = () => {
    setValue(!value);
  };

  return <Toggle state={value} onClick={onClick} disabled />;
}

export default App;
