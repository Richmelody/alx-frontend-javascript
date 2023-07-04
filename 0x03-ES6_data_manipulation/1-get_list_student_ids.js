export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const mappedArr = arr.map((element) => element.id);
    return mappedArr;
  }
  return [];
}

