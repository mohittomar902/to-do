import "../App.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux_Saga/appAction";

export const TaskForm = (props) => {
  const dispatch = useDispatch();
  const newData = {
    title: "",
    date: "",
    duration:"",
    priority: "",
    category: "",
  };
  const handleAdd = () => {
    dispatch(addTask(newData));
    props.handleClose();
    console.log(newData);
  };

  return (
    <div className="popup-box">
      <Form className="box " style={{ width: "18rem" }}>
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            required
            placeholder="Task Title"
            onChange={(e) => (newData.title = e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="date"
            onChange={(e) => (newData.date = e.target.value)}
          />
          <Form.Control
            type="number"
            placeholder="Enter Deadline in Hour"
            required
            onChange={(e) => (newData.duration = e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 ">
          <Form.Label className="mr-3">Category</Form.Label>
          <Form.Select onChange={(e) => (newData.category = e.target.value)}>
            <option selected disabled>select</option>
            <option>Meeting</option>
            <option>Interview</option>
            <option>documentation</option>
            <option>Deployment</option>
            <option>Discussion</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mr-3">Priority</Form.Label>
          <Form.Select onChange={(e) => (newData.priority = e.target.value)}>
            <option selected disabled>select</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleAdd}>
            Add Task
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
