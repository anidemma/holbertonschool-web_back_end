export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const grd = getListStudents.filter((student) => student.location === city);

  return grd.map((student) => {
    const gradeEntry = newGrades.find((grade) => grade.studentId === student.id);
    return { ...student, grade: gradeEntry ? gradeEntry.grade : 'N/A' };
  });
}
  