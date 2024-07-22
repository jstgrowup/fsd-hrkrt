import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to the gym",
      description: "Fo to the gym from 7-9",
      completed: true,
    },
    {
      title: "Study DSA",
      description: "Study DSA from 9-100",
      completed: true,
    },
  ]);
  return (
    <div>
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
      <Todo title=""></Todo>
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
