import { useState, memo, useEffect, useCallback } from "react";
import "./App.css";
function useTodos() {
  const [todo, settodo] = useState(second);
}
function App() {
  const [count, setcount] = useState([]);
  const inputFunction = useCallback(() => {
    console.log("hi there");
  }, []);

  return <div></div>;
}
const ButtonComponent = ({ inputFunction }) => {
  console.log("child rendered");
  return (
    <div>
      <button>Button Clicked</button>
    </div>
  );
};
export default App;
