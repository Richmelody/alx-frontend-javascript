/* eslint-disable no-unused-vars */
import getListStudents from "./0-get_list_students.js";

export default function getListStudentIds(obj) {
  const myArr = getListStudents();

  const mappedArr = myArr.map((element) => element.id);

  if (Array.isArray(obj)) {
    return mappedArr;
  }
  return [];
}

