import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup.page";
import SignIn from "./pages/Signin.page";
import React, { Suspense } from "react";
const Blogs = React.lazy(() => import("./pages/Blogs.page"));
const IndividualBlog = React.lazy(() => import("./pages/IndividualBlog.page"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/blogs"
            element={
              <Suspense fallback={"Loading..."}>
                <Blogs />
              </Suspense>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <Suspense fallback={"Loading..."}>
                <IndividualBlog />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
