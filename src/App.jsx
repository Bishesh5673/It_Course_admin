import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import CreateCourse from "./pages/CreateCourse";
import EditCourse from "./pages/EditCourse";


function App() {
  return (
    <div className="flex"  >
      <div  className="h-[100vh] w-[400px] border  bg-black">
        <Header />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editCourse" element={<EditCourse />} />
          <Route path="/createcourse" element={<CreateCourse />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
