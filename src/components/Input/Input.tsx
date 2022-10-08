// This component is just wrapper around current input
// It's easier to change the css in one single place and if we need to define our own interface is easier too
// e.g: create specific listeners, validators, etc
import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

function Input(props: InputProps) {
  return (
    <input {...props} />
  );
}

export default Input;
