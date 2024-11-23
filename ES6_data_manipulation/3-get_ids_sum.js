export default function getStudentIdsSum(getListStudents) {
  const sum = getListStudents.reduce((sum, num) => sum + num.id, 0);
  return sum;
}