import { useState } from 'react';
import './App.css'

function CalcDisplay({dispValue}) {
  return (
    <div className='Display'>
      {dispValue}
    </div>
  );
}

function CalcButton({buttonLabel, buttonClassName = 'Button', onCLick}) {
  return (
    <button className={buttonClassName} onClick={onCLick}>
      {buttonLabel} 
    </button>
  );
}

function App() {
  const[disp, setDisp] = useState(0);
  const[operand1, setOperand1] = useState(null);
  const[operand2, setOperand2] = useState(null);
  const[operation, setOperation] = useState(null);

  const [showName, setShowName] = useState(false);

  const buttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setDisp(value);
  }

  const clearButtonClickHandler = (e) => {
    e.preventDefault();
    setDisp(0);
    setOperand1(null);
    setOperand2(null);
    setOperation(null);
    setShowName(false);
  }

  const equalButtonClickHandler = (e) => {
    e.preventDefault();

    if(operation === "+"){
      setDisp(parseInt(operand1) + parseInt(operand2));
    }
    else if(operation === "-"){
      setDisp(parseInt(operand1) - parseInt(operand2));
    }
    else if(operation === "x"){
      setDisp(parseInt(operand1) * parseInt(operand2));
    }
    else if(operation === "÷"){
      setDisp(parseInt(operand1) / parseInt(operand2));
    }
  }

  const operationButtonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOperation(value);
    setDisp(value);
  }

  const numbuttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    console.log(value + "|" + operand1 + "|" + operand2 + "|" + operation);

    setShowName(false);

    if(operation === null) {

      if(operand1 === null) {
        setDisp(value);
        setOperand1(value);
      } else {
        setDisp(operand1 + value);
        setOperand1(operand1 + value);
      }

    } else {

      if(operand2 === null) {
        setDisp(value);
        setOperand2(value);
      } else {
        setDisp(operand2 + value);
        setOperand2(operand2 + value);
      }

    }
  }

  const nameButtonClickHandler = () => {
    setShowName(true);
  }

  return (
    <div className='App'>

      <div className='Header'>
        Calculator of John Exodus Hernandez - WMD3A
      </div>

      <div className='Calculator'> 

        <CalcDisplay 
          dispValue={showName ? "JOHN EXODUS HERNANDEZ" : disp}
        />

        <div className='Keypad'>

          <CalcButton buttonLabel={7} onCLick={numbuttonClickHandler}/>
          <CalcButton buttonLabel={8} onCLick={numbuttonClickHandler}/>
          <CalcButton buttonLabel={9} onCLick={numbuttonClickHandler}/>
          <CalcButton buttonLabel={"÷"} onCLick={operationButtonClickHandler}/>

          <CalcButton buttonLabel={4} onCLick={numbuttonClickHandler}/>
          <CalcButton buttonLabel={5} onCLick={numbuttonClickHandler}/>
          <CalcButton buttonLabel={6} onCLick={numbuttonClickHandler}/>
          <CalcButton buttonLabel={"x"} onCLick={operationButtonClickHandler}/>

          <CalcButton buttonLabel={1} onCLick={numbuttonClickHandler}/>
          <CalcButton buttonLabel={2} onCLick={numbuttonClickHandler}/>
          <CalcButton buttonLabel={3} onCLick={numbuttonClickHandler}/>
          <CalcButton buttonLabel={'-'} onCLick={operationButtonClickHandler}/>

          <CalcButton 
            buttonLabel={"CLR"} 
            buttonClassName="ClrButton" 
            onCLick={clearButtonClickHandler}
          />

          <CalcButton buttonLabel={0} onCLick={numbuttonClickHandler}/>

          <CalcButton 
            buttonLabel={"="} 
            buttonClassName="EqualButton" 
            onCLick={equalButtonClickHandler}
          />

          <CalcButton buttonLabel={"+"} onCLick={operationButtonClickHandler}/>

        </div>

        <CalcButton
          buttonLabel={"SHOW MY NAME"}
          buttonClassName="NameButton"
          onCLick={nameButtonClickHandler}
        />

      </div>

    </div>
  )
}

export default App