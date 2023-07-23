import Nav from "../nav";
import Lab3 from "./lab3";
import Lab4 from "./lab4";
import { Link, Navigate, Routes, Route } from "react-router-dom";

function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <Link to="lab3">Lab3</Link> | <Link to="lab4">Lab4</Link>
      <Routes>
          <Route path="/" element={<Navigate to={'lab3'}/>} />
          <Route path="/lab3" element={<Lab3 />} />
          <Route path="/lab4" element={<Lab4 />} />
        </Routes>
    </div>
  );
}
export default Labs;
