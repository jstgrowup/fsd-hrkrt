"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "Subham", age: 23 }, { name: "sayani", age: 21 });
console.log("age:", age);
