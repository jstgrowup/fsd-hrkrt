import React from "react";
import "./App.css";

import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";
function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}
const Count = () => {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
};
function CountRenderer() {
  // if i only neeed the value of the state
  const count = useRecoilValue(countAtom);
  // if i need both the state and the setter state
  // const [count, setcount] = useRecoilState(countAtom);
  return <div>{count}</div>;
}
function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);

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
