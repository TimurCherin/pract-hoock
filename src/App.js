import './App.css';
import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(0)

  const addValue = () => {
    setValue(value + 1)
  }

  const minValue = () => {
    setValue(value - 1)
  }

  return (
    <div className='App'>
      {value}
      <button onClick={addValue}>add</button>
      <button onClick={minValue}>-</button>
    </div>
  );
}

export default App;
