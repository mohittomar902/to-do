import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../App.css";
import {
  removeTask,
  sortTaskByPriorityAc,
  sortTaskByPriorityDc,
  sortTaskByDurationAc,
  sortTaskByDurationDc,
} from "../Redux_Saga/appAction";
import { useDispatch } from "react-redux";

export const TaskList = () => {
  const [isSort, setSort] = useState(false);
  const [isSortD, setSortD] = useState(false);
  const dispatch = useDispatch();
  const taskData = useSelector((state) => state.app);
  const handleRemove = (index) => {
    console.log(index);
    dispatch(removeTask(index));
  };
  const handlesortPriorty = () => {
    if (isSort) {
      dispatch(sortTaskByPriorityDc(taskData));
      setSort(!isSort);
    } else {
      dispatch(sortTaskByPriorityAc(taskData));
      setSort(!isSort);
    }
  };
  const handlesortDuration = () => {
    if (isSortD) {
      dispatch(sortTaskByDurationAc(taskData));
      setSortD(!isSortD);
    } else {
      dispatch(sortTaskByDurationDc(taskData));
      setSortD(!isSortD);
    }
  };
  console.log(taskData);
  useEffect(() => {
    localStorage.setItem("toDoData", JSON.stringify(taskData));
  }, [taskData]);
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Task List ({taskData.length}) Sort By{" "}
            <button onClick={handlesortPriorty}>Priority</button>
            <button onClick={handlesortDuration}>Duration</button>
          </h5>
          <table className="table table-light table-hover m-1">
            <tbody>
              {taskData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <h2>{data.title}</h2>
                    </td>
                    <td>Date: {data.date}</td>
                    <td>Duration: {data.duration}h</td>
                    <td>Priority: {data.priority}</td>
                    <td>Category: {data.category}</td>
                    <td>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => handleRemove(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
