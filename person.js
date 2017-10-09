function Person (name, age, address) {
    this.name = name; // define some properties
    this.age = age;
    this.address = address;
}

function Student (college) {
    this.college = college;
}

var person = new Person("raj","29", "TR nagar");

Student.prototype = person; //inherit person to student

var raj = new Student("KVGCE");

console.log("Student Name : " + raj.address);