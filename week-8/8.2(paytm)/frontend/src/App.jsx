import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./component/Signup";
import SignIn from "./component/SignIn";
import Dashboard from "./component/Dashboard";
import Send from "./component/Send";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<Send />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
