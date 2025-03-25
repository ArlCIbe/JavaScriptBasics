const _studentPrototype = {
    name: "",
    grade: "",
    conduct: ""
};

function attendance() {
    console.log(this.name + ": Present!");
}

function constructor(name, grade, conduct) {
    let student = Object.create(_studentPrototype);
    student.name = name;
    student.grade = grade;
    student.conduct = conduct;
    return student;
}

_studentPrototype.constructor = constructor;
_studentPrototype.attendance = attendance;

let Students = [
    constructor("John", "A", "Excellent"),
    constructor("Alice", "B", "Good"),
    constructor("Bob", "C", "Satisfactory"),
    constructor("Emily", "A", "Excellent"),
    constructor("Charlie", "D", "Needs Improvement"),
    constructor("Diana", "F", "Poor")
];

function filterGrade(student, grade) {
    return student.grade === grade;
}

let perfectScores = Students.filter(student => filterGrade(student, "A"));
let gradeB = Students.filter(student => filterGrade(student, "B"));
let gradeC = Students.filter(student => filterGrade(student, "C"));
let gradeD = Students.filter(student => filterGrade(student, "D"));
let gradeF = Students.filter(student => filterGrade(student, "F"));

Students.map(student => student.attendance());
