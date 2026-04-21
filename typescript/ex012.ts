function findsBigger(...notas: number[]): number {
    const highestGrade = Math.max(...notas);
    return highestGrade;
};

const firstSemesterGrades = [7.5, 8.0, 9.0];
const secundarySemesterGrades = [6.0, 9.5, 8.5];
const allGrades = firstSemesterGrades.concat(...secundarySemesterGrades);

const highestNumber = findsBigger(10, 5, 2, 30);
const highestGradeOfClass = findsBigger(...allGrades);

console.log("Maior nota avulsa: ", highestNumber);
console.log("Maior nota da turma: ", highestGradeOfClass);