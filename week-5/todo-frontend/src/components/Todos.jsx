import React from "react";

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        <div>
          {" "}
          <h1>{todo.title}</h1>
          <h1>{todo.description}</h1>
          <button>{todo.completed ? "Completed" : "In complete"}</button>
        </div>;
      })}
    </div>
  );
};

export default Todos;
