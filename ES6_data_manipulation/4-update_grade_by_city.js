export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const grd = getListStudents.filter((student) => student.location === city);

  grd.map((student) => {
    const gradeEntry = newGrades.find((grade) => grade.studentId === student.id);
    student.grade = gradeEntry ? gradeEntry.grade : 'N/A';
  });

  return grd;
}
