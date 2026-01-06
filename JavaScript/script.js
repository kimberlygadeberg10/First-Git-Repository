// Counter Widget

let count = 0;
const countDisplay = document.getElementById('count');

document.getElementById('plus').addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
})

document.getElementById('minus').addEventListener('click', () => {
    count--;
    countDisplay.textContent = count;
})

// To Do List Widget

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

document.getElementById('addTask').addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = '';
    }
})
    
// Random Quote Widget

const quotes = [
    "Keep pushing forward.",
    "Believe in yourself.",
    "Every day is a new opportunity.",
    "Stay positive and strong.",
    "You can do hard things.",
    "Every expert was once a beginner."
];

const quoteText = document.getElementById('quoteText');

document.getElementById('newQuote').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
})
     
     
     // Variables, Data Types, and Operators

    let name = "Kimberly"; // String
    const age = 39; // Number
    let isStudent = true; // Boolean

    let x = 5
    let y = 2

    console.log('Sum', x + y, 'Difference', x - y, 'Product', x * y,);


    console.log(name, age, isStudent);

    // Functions & Scope

    function greet(person) {
        return 'Hello, ' + person + "!";
    }

    console.log(greet(name));

    const greetArrow = (person) => 'Hi, ${person}, welcome to the Workshop';

    console.log(greetArrow(Alice));

    let globalVar = 'I am Global';

    function showScope() {
        let localVar = 'I am Local';
        console.log(globalVar); // Accessible
        console.log(localVar); // Accessible only in the function
    }

    showScope();
    console.log(globalVar);
    // console.log(localVar); // This would cause an erroe because of the scope

    //Arrays & Objects

    //                0       1         2
     let fruits = ['Apple', 'Banana', 'Cherry'];

    console.log(fruits)

    fruits.push('orange');

    console.log('Updated lists:', fruits);

    let fruitsLength = fruits.length;

    console.log(fruitsLength);

    let person = {
        firstName: 'Kimberly',
        age: 39,
        role: 'Student'
    };

    console.log(person);

    // Loops & Conditionals Logic


    let numbers = [1, 2, 3, 4, 5];

    for (let i = 0; i < numbers.length; i++) {
        console.log('Number:', numbers[i]);
    }

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i], 'is Even');
        } else {
            console.log(numbers[i], 'is Odd');
        }
    }

    // DOM Basics

    document.getElementById('btn').addEventListener('click', () => {
        document.getElementById('msg').textContent = 'You clicked the button!';
    })
