export default function getListStudents() {
  const firstName = ['Guillaume', 'James', 'Serena'];
  const id = [1, 2, 5];
  const location = ['San Francisco', 'Columbia', 'San Francisco'];

  const students = [];

  for (let i = 0; i < 3; i++) {
    const student = {
      id: id[i],
      firstName: firstName[i],
      location: location[i],
    };

    students.push(student);
  }


  return students;
}

