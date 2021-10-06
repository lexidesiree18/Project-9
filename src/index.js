class Course{
    constructor(name){
        this.students = new Map();
    }
    grade (name,grade) {
        this.students.set(name, grade);
    }
}
let names = document.getElementById('names');
let gradesInput = document.getElementById('grades');
let module = new Course ('Data Structures');

function addingGrades(){
    let grades = gradesInput.value;
    let name = names.value;
    module.grade(name, grade);
    let letter = document.createElement('h3');
    letter.innrHTML = grade
    document.body.appendChild(letter)
}