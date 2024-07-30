import React from "react";
import "./App.css";

import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
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
  return (
    <div>
      <h1>{count}</h1>
      <EvenCountRenderer />
    </div>
  );
}
const EvenCountRenderer = () => {
  const count = useRecoilValue(evenSelector);
  return (
    <div>
      <h3>{count % 2 === 0 ? "Even" : "Odd"}</h3>
    </div>
  );
};
function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}
export default App;
