import React from "react";

const CreateTodo = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const handleAddTodo = () => {
    fetch("http://localhost:8000/todo", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(event) => settitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(event) => setdescription(event.target.value)}
      />
      <button onClick={handleAddTodo}>Add a todo</button>
    </div>
  );
};

export default CreateTodo;
