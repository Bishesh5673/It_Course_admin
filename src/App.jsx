import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import CreateCourse from "./pages/CreateCourse";
import EditCourse from "./pages/EditCourse";
import Enrollments from "./pages/Enrollments";


function App() {
  return (
    <div className="flex"  >
      <div  className=" w-[300px] ">
        <Header />
      </div>

      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editCourse" element={<EditCourse />} />
          <Route path="/createcourse" element={<CreateCourse />} />
          <Route path="/enrollments" element={<Enrollments />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
