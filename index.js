////Task1
let input = prompt("Enter word:");

if (input === null) {
    alert("Canceled.");
} else {
    input = input.trim();

    if (input.length === 0) {
        alert("Invalid value");
    } else {
        let len = input.length;

        if (len % 2 === 0) {
            let midIndex = len / 2;
            let middleChars = input[midIndex - 1] + input[midIndex];
            alert(middleChars);
        }
        else {
            let midIndex = Math.floor(len / 2);
            let middleChar = input[midIndex];
            alert(middleChar);
        }
    }
}

////Task2
const users = [
    {
        id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        skills: ["ipsum", "lorem"],
        gender: "male",
        age: 37,
    },
    {
        id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
        gender: "female",
        age: 34,
    },
    {
        id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        skills: ["nulla", "anim", "proident", "ipsum", "elit"],
        gender: "male",
        age: 24,
    },
    {
        id: "249b6175-5c30-44c6-b154-f120923736f5",
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        skills: ["adipisicing", "irure", "velit"],
        gender: "female",
        age: 21,
    },
    {
        id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        skills: ["ex", "culpa", "nostrud"],
        gender: "male",
        age: 27,
    }
];

function getUniqueSkills(users) {
    let uniqueSkills = [];

    users.forEach(user => {
        user.skills.forEach(skill => {
            if (!uniqueSkills.includes(skill)) {
                uniqueSkills.push(skill);
            }
        });
    });

    return uniqueSkills;
}

function getTotalBalance(users) {
    return users
        .filter(user => user.friends.length === 2 && user.age < 30)
        .reduce((total, user) => total += user.balance, 0);
}

console.log(getUniqueSkills(users));
console.log(getTotalBalance(users));

////Task3
//The spread operator is used to expand elements of an iterable (like an array, string, or object) into individual elements.
//Example:
const arr1 = ['a', 'b', 'c'];
const arr2 = ['x', 'y', 'z'];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

function sum(a, b, c) {
    return a + b + c;
}
const numbers = [10, 64, 23];
console.log(sum(...numbers));
//The rest operator is used to collect multiple elements and combine them into a single array or object.
const [a, ...b] = ['a', 'b', 'c', 'd', 'e'];
console.log(a);
console.log(b);
// Spread unpacks elements and Rest packs elements 

////Task 4
document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('#nameList li');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.textContent;
            alert(`Hello, ${name}`);
        });
    });
});