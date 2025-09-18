import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="heading">Welcome to React</h1>
      <h2 id="syllabus_heading">Course Syllabus</h2>
      <ul className="course_list">
        <li>Setup</li>
        <li>Intro</li>
        <li>Component</li>
      </ul>
    </div>
  );
}

export default App;
