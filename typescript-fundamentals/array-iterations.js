var studentGrades = [10, 8, 8.5, 7];
// indices - in
for (var i in studentGrades) {
    console.log(i);
}
// values - of
for (var _i = 0, studentGrades_1 = studentGrades; _i < studentGrades_1.length; _i++) {
    var grade = studentGrades_1[_i];
    console.log(grade);
}
