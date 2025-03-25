let studentNames = ["Arlinda", "Katerra", "Matthew", "Lakeesha", "Ebony"]

console.log(studentNames)

let student1 = {
    name: "Arlinda",
    grade: "A",
    conduct: "E"
}

console.log(student1.name)

console.log(student1.grade)

function student(name, grade, conduct){
    this.name = name
    this.grade = grade
    this.conduct = conduct
}

let student2 = new student ("Katerra", "A-", "E")
let student3 = new student ("Matthew", "A+", "S")
let student4 = new student ("Lakeesha", "B+", "E")
let student5 = new student ("Ebony", "A-", "S")
let student6 = new student ("Vontae", "A", "S")

let students = []

students.push(student1, student2, student3, student4, student5, student6)

students.forEach(student =>{
    console.log(student.name)
})

students.forEach(student =>{
    console.log(student["grade"])
})