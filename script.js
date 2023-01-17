let marks = 0;
let grade = "";


function setGrade() {
  document.getElementById("output").innerText = `Your grade is: ${grade}`;
}

function gradeCalculate() {
  marks = document.querySelector("#marks").value;
  if(marks<0 || marks>100) {
    document.getElementById("output").innerText = `Enter valid marks`;
    return;
  }
  else if(marks < 33) {
    grade = "F";
  }
  else if(marks <= 39) {
    grade = "D";
  }
  else if(marks <= 49) {
    grade = "C";
  }
  else if(marks <= 59) {
    grade = "B";
  }
  else if(marks <= 69) {
    grade = "A-";
  }
  else if(marks <= 79) {
    grade = "A";
  }
  else {
    grade = "A+";
  }
  setGrade();
}

