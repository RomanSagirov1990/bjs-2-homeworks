function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
};
let stan = new Student("Стэн", "муж", "30");
let ford = new Student("Форд", "муж", "32");

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
};
Student.prototype.addMarks = function ( ...args) {
  if (this.marks === undefined) {
    this.marks = [];
    args.map(el => this.marks.push(el));
  } else {
    args.map(el => this.marks.push(el));
  }
};

Student.prototype.getAverage = function () {
  let sum = this.marks.reduce((sum, current) => sum + current)  
  this.mediumAriphetic = sum / this.marks.length
  return this.mediumAriphetic
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};