let studentGrades: number[] = [10, 8, 8.5, 7];

// indices - in
for (let i in studentGrades) {
  console.log(i);
}

// values - of
for (let grade of studentGrades) {
  console.log(grade);
}
