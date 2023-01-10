import { useState } from 'react';
import styles from "./Calculator.module.scss";
import Button from "./Button";
import Screen from './Screen.jsx'

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (e) => {
    setInput(input.concat(e.target.innerText));
  }

  const result = () => {
    setInput(eval(input));
  }

  const clear = () => {
    setInput('');
  }

  const backspace = () => {
    setInput(input.slice(0, -1));
  }

  return (
    <div className={styles.Calculator}>
      <Screen input={input} />
      <div className={styles.Numpad}>
        <Button clickHandler={clear} isNumber={false} value='AC' />
        <Button clickHandler={backspace} isNumber={false} value='C' />
        <Button clickHandler={handleClick} isNumber={false} value='/' />
        <Button clickHandler={handleClick} isNumber={false} value='*' />
        <Button clickHandler={handleClick} isNumber={true} value='7' />
        <Button clickHandler={handleClick} isNumber={true} value='8' />
        <Button clickHandler={handleClick} isNumber={true} value='9' />
        <Button clickHandler={handleClick} isNumber={false} value='-' />
        <Button clickHandler={handleClick} isNumber={true} value='4' />
        <Button clickHandler={handleClick} isNumber={true} value='5' />
        <Button clickHandler={handleClick} isNumber={true} value='6' />
        <Button clickHandler={handleClick} isNumber={false} value='+' />
        <Button clickHandler={handleClick} isNumber={true} value='1' />
        <Button clickHandler={handleClick} isNumber={true} value='2' />
        <Button clickHandler={handleClick} isNumber={true} value='3' />
        <Button clickHandler={result} isNumber={false} value='=' />
        <Button clickHandler={handleClick} isNumber={true} value='0' />
        <Button clickHandler={handleClick} isNumber={true} value='.' />
      </div>
    </div>
  );
}

export default Calculator;
