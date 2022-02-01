//Q1

let strictA = true;
let strictB = 1;
console.log(strictA == strictB); // returns true
console.log(strictA === strictB); // returns false

//Q2

console.log(strictA != strictB); // returns false
console.log(strictA !== strictB); // returns true

//Q3

let age = 60;

if (age >= 18 && age <= 65){
    console.log("Condition satisfied");
} else if (age < 18){
        console.log("Underage")
    }else {
    console.log("Condition not satisfied")
}

//Q4 

age === "50" ? console.log("age is correct"): console.log("age is incorrect")
