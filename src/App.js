import Header from "./components/Header";
import Student from "./components/Student";
import Classroom from "./components/Classroom";
import Cursor from "./components/Cursor";
import cursor from "./components/Cursor";


import "./styles/index.css";
import "./App.css"

export default function App() {
    window.addEventListener("mousemove", Cursor);
  return (
    <div className="App">
      <Cursor/>
      <Header />
      <Classroom />
    </div>
  );
}