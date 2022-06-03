export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});
export const removeTask = (id) => ({
  type: "REMOVE_TASK",
  payload: id,
});
export const addTaskSaga = (task) => ({
  type: "ADD_TASK_SAGA",
  payload: task,
});
export const removeTaskSaga = (id) => ({
  type: "REMOVE_TASK_SAGA",
  payload: id,
});
export const sortTaskByPriorityAc = (task) => ({
  type: "SORT_TASK_BY_PRIO_AC",
  payload: task,
});
export const sortTaskByPriorityDc = (task) => ({
  type: "SORT_TASK_BY_PRIO_DC",
  payload: task,
});
export const sortTaskByDurationAc = (task) => ({
  type: "SORT_TASK_BY_DURATION_AC",
  payload: task,
});
export const sortTaskByDurationDc = (task) => ({
  type: "SORT_TASK_BY_DURATION_DC",
  payload: task,
});
export const sortTaskByPriorityAcSaga = (task) => ({
  type: "SORT_TASK_BY_PRIO_AC_SAGA",
  payload: task,
});
export const sortTaskByPriorityDcSaga = (task) => ({
  type: "SORT_TASK_BY_PRIO_DC_SAGA",
  payload: task,
});
export const sortTaskByDurationAcSaga = (task) => ({
  type: "SORT_TASK_BY_DURATION_AC_SAGA",
  payload: task,
});
export const sortTaskByDurationDcSaga = (task) => ({
  type: "SORT_TASK_BY_DURATION_DC_SAGA",
  payload: task,
});