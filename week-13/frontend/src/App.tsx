import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup.page";
import SignIn from "./pages/Signin.page";
import Blogs from "./pages/Blogs.page";
import IndividualBlog from "./pages/IndividualBlog.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<IndividualBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
