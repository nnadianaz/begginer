import { useState } from 'react';
import './App.css';

function App() {
  
  const [counter, setCounter] = useState(0);

  const increaseValue = () => {
    setCounter(counter + 1); 
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    console.log(counter)  
  };

  const decreaseValue = () => {
    setCounter(counter - 1);
    console.log(counter)  
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={increaseValue}>Increase Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
      <p>Footer: </p>
    </>
  );
}

export default App;
