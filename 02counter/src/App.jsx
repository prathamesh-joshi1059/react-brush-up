import "./App.css";
import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      console.log("value Added");
      setCounter(counter + 1);
    }
  };
  const subValue = () => {
    if (counter > 0) {
      console.log("value Removed");
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={subValue}>Remove Value</button>
    </>
  );
}

export default App;
