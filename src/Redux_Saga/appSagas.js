import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  removeTaskSaga,
  addTaskSaga,
  sortTaskByPriorityAcSaga,
  sortTaskByPriorityDcSaga,
  sortTaskByDurationAcSaga,
  sortTaskByDurationDcSaga,
} from "./appAction";

export function* onAddTaskSaga({ payload }) {
  yield put(addTaskSaga(payload));
}

export function* onRomoveTaskSaga({ id }) {
  yield put(removeTaskSaga(id));
}
export function* onsortTaskByPriorityAcSaga({ payload }) {
  yield put(sortTaskByPriorityAcSaga(payload));
}
export function* onsortTaskByPriorityDcSaga({ payload }) {
  yield put(sortTaskByPriorityDcSaga(payload));
}
export function* onsortTaskByDurationAcSaga({ payload }) {
  yield put(sortTaskByDurationAcSaga(payload));
}
export function* onsortTaskByDurationDcSaga({ payload }) {
  yield put(sortTaskByDurationDcSaga(payload));
}
export function* onAdd() {
  yield takeLatest("ADD_TASK", onAddTaskSaga);
}
export function* onRemove() {
  yield takeLatest("REMOVE_TASK", onRomoveTaskSaga);
}
export function* onSortTaskByPriorityAc() {
  yield takeLatest("SORT_TASK_BY_PRIO_AC", sortTaskByPriorityAcSaga);
}
export function* onSortTaskByPriorityDc() {
  yield takeLatest("SORT_TASK_BY_PRIO_DC", sortTaskByPriorityDcSaga);
}
export function* onSortTaskByDurationAc() {
  yield takeLatest("SORT_TASK_BY_DURATION_AC", sortTaskByDurationAcSaga);
}
export function* onSortTaskByDurationDc() {
  yield takeLatest("SORT_TASK_BY_DURATION_DC", sortTaskByDurationDcSaga);
}
export function* tasks() {
  yield all([
    call(onAdd),
    call(onRemove),
    call(onSortTaskByPriorityAc),
    call(onSortTaskByPriorityDc),
    call(onSortTaskByDurationAc),
    call(onSortTaskByDurationDc),
  ]);
}
