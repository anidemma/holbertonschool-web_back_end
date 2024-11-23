export default function getListStudentIds(getListStudents) {
  if(Array.isArray(getListStudents)) {
    return [getListStudents.map(student => student.id)];
  }
  return [];
}