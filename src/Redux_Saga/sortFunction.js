const priorityArray = ["High", "Medium", "Low"];
export const compareByPriorityAc = (a, b) => {
  let firstElement = priorityArray.indexOf(a.priority);
  let secoundElement = priorityArray.indexOf(b.priority);
  return firstElement - secoundElement;
};

export const compareByPriorityDc = (a, b) => {
  let firstElement = priorityArray.indexOf(a.priority);
  let secoundElement = priorityArray.indexOf(b.priority);
  return secoundElement - firstElement;
};

export const compareByDurationAc = (a, b) => {
  return a.duration - b.duration;
};
export const compareByDurationDc = (a, b) => {
  return b.duration - a.duration;
};
