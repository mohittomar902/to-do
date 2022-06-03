import data from "../component/data";
import {
  compareByPriorityAc,
  compareByPriorityDc,
  compareByDurationAc,
  compareByDurationDc,
} from "./sortFunction";

const appReducer = (state = data(), action) => {
  let newTask;
  switch (action.type) {
    case "ADD_TASK":
      newTask = [...state];
      newTask.push(action.payload);
      return newTask;

    case "REMOVE_TASK":
      newTask = [...state];
      newTask = newTask.filter((ele, index) => index !== action.payload);
      return newTask;
    case "SORT_TASK_BY_PRIO_AC":
      newTask = [...state];
      newTask.sort(compareByPriorityAc);
      return newTask;

    case "SORT_TASK_BY_PRIO_DC":
      newTask = [...state];
      newTask.sort(compareByPriorityDc);
      return newTask;

    case "SORT_TASK_BY_DURATION_AC":
      newTask = [...state];
      newTask.sort(compareByDurationAc);
      return newTask;
    case "SORT_TASK_BY_DURATION_DC":
      newTask = [...state];
      newTask.sort(compareByDurationDc);
      return newTask;
    default:
      return state;
  }
};

export default appReducer;
