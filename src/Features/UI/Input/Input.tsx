import React from 'react';
import Styles from './Input.module.css';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
};

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <div className={Styles.Root}>
      <input
        className={Styles.Input}
        onChange={(event) => onChange(event.currentTarget.value)}
        value={value}
      />
    </div>
  );
};

export default Input;
