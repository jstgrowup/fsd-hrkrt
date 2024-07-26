import { useState, memo } from "react";
import "./App.css";
function App() {
  const [title, settitle] = useState("my name is subham");
  function changeTitle() {
    settitle("my name is " + Math.random());
  }
  return (
    <div>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={title} />
      <Header title={"My name is subham"} />
      <Header title={"My name is subham"} />
      <Header title={"My name is subham"} />
      <Header title={"My name is subham"} />
    </div>
  );
}
const Header = memo(function ({ title }) {
  return <div>{title}</div>;
});
export default App;
