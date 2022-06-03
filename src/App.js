import "./App.css";
import { TaskForm } from "./component/TaskForm";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { TaskList } from "./component/TaskList";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="box">
      <h1>TO DO LIST</h1>
      <Button onClick={togglePopup}>Add Task</Button>
      {isOpen && <TaskForm handleClose={togglePopup} />}
      <TaskList />
    </div>
  );
}

export default App;
