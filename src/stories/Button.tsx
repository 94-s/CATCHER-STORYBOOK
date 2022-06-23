import React from 'react';

export interface ButtonProps {}

function Button({ ...props }: ButtonProps) {
  return <button>Hello</button>;
}

export default Button;
