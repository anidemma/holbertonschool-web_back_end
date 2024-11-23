export default function getStudentsByLocation(getListStudents, city) {
  return (getListStudents.filter((obj) => obj.location === city));
}
