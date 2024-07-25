// import "./App.css";

import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to the gym",
      description: "Fo to the gym from 7-9",
      completed: true,
    },
    {
      id: 2,
      title: "Study DSA",
      description: "Study DSA from 9-100",
      completed: true,
    },
  ]);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <Todo title={todo.title} description={todo.description} />;
          </div>
        );
      })}
    </div>
  );
}
function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
    </div>
  );
}
export default App;
