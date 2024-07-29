import React, { Suspense, useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./context";

function App() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setcount={setcount} />
      </CountContext.Provider>
    </div>
  );
}
const Count = ({ setcount }) => {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setcount} />
    </div>
  );
};
function CountRenderer() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}
function Buttons({ setCount }) {
  const count = useContext(CountContext);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}
export default App;
