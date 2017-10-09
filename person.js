function Person (name, age, address) {
    this.name = name; // define some properties
    this.age = age;
    this.address = address;
}

function Student () {

}

Student.prototype = Person; //inherit person to student

Student.age = "19" // change the property value in inherited class

console.log("Student Name : " + Student.age);