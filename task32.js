//  Calculate grade from 5 subject marks.
let marks = [85, 90, 78, 92, 88];
let totalMarks = 0;
for(let i = 0; i < marks.length; i++){
    totalMarks += marks[i];
}
let averageMarks = totalMarks / marks.length;
let grade;
if(averageMarks >= 90){
    grade = 'A';
}
else if(averageMarks >= 80){
    grade = 'B';
}
else if(averageMarks >= 70){
    grade = 'C';
}
else if(averageMarks >= 60){
    grade = 'D';
}
else{
    grade = 'F';
}
console.log("Average Marks: " + averageMarks);
console.log("Grade: " + grade);