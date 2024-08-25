import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup.page";
import SignIn from "./pages/signin.page";
import Blog from "./pages/blog.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
