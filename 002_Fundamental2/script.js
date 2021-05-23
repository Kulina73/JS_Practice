'use strict';
/*//function declarations
function logger() {
    console.log("My name is Kulli");
}

//calling, running, invoking function
logger();
logger();

function fruitProcessor (apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);*/

/*function calcAge1(birthYear)  {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//function expression

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);*/

/*//arrow function

const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991);
console.log(age3);*/


//function calling other functions

/*function cutFruitPieces(fruit)  {
    return fruit * 4;
}

function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));*/


/*//review

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firtstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firtstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firtstName} has already retired 🎉`);
        return -1;
    }
}
   
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1973, 'Kulli'));
console.log(yearsUntilRetirement(1950, 'Mike'));*/

//Challenge #2.1

/*const calcAvarage = (score1, score2, score3) => (score1 + score2 + score3)/3;

//Test 1
let scoreDolphins = calcAvarage(44, 23, 71);
let scoreKoalas = calcAvarage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avarageDolphins, avarageKoalas,) {
    

    if(avarageDolphins >= avarageKoalas*2) {
        console.log(`Dolphins win (${avarageDolphins} vs. ${avarageKoalas})`);
        
    } else if (avarageKoalas >= avarageDolphins * 2) {
        console.log(`Koalas win (${avarageKoalas} vs. ${avarageDolphins})`)
    } else {
        console.log(`No team wins!`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);

//test 2

scoreDolphins = calcAvarage(85, 54, 41);
scoreKoalas = calcAvarage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);*/

//Array

/*const friends = ['Michael', 'Steven', 'Peter'];

const firstName = 'Kulli';
const kulli = [firstName, 'Maslova', 2037-1973, 'mom', friends];

console.log(kulli);
console.log(kulli.length);

//array operations - methods
//add elements
//const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John'); //first place
console.log(friends);

//Remove elements
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if(friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}*/


//challenge #2

/*const bill = 100;

if (bill >= 50 && bill <= 300) {
    console.log(`The bill was ${bill}, the tip was ${bill * 0.15} and the total value ${bill - bill * 0.15}`);
} else {
    console.log(`The bill was ${bill}, the tip was ${bill * 0.2} and the total value ${bill - bill * 0.2}`);
} */
//const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

/*const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;    
}

//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]; 
console.log(bills, tips, totals);*/


/*function calcTip (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]; 
console.log(bills, tips, totals);*/

//Objects

/*const kulli = {
    firstName: 'Kulli',
    lastName: 'Maslova',
    age: 2037- 1973,
    job: 'mom',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(kulli);

console.log(kulli.lastName);
console.log(kulli['lastName']);

const nameKey = 'Name';
console.log(kulli['first' + nameKey]);
console.log(kulli['last' + nameKey]);

//console.log(kulli.'last' + nameKey)

/*const interestedIn = prompt('What do you want to know about Kulli? Choose between firstName, lastName, age, job, and friends');
console. log(kulli[interestedIn]);

if (kulli[interestedIn]) {
    console.log(kulli[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends') 
}*/

/*kulli.location = 'Atlanta';
kulli['twitter'] = '@kullimaslova';
console.log(kulli);*/

//Challenge
//"Kulli has 3 friends, and her best friend is called Michael"

//console.log(`${kulli.firstName} has ${kulli.friends.length} friends, and her best friend is called ${kulli.friends[0]}`);

//Object methods

/*const kulli = {
    firstName: 'Kulli',
    lastName: 'Maslova',
    birthYear: 1973,
    job: 'mom',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    
    /*calcAge: function (birthYear) {
        return 2037 - birthYear;
    } //expression */

    /*calcAge: function () {
        return 2037 - this.birthYear;
    } */
/*
    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's licence.`
    } 
};


//console.log(kulli);
console.log(kulli.calcAge());

console.log(kulli.age);
console.log(kulli.age);
console.log(kulli.age);


//console.log(kulli['calcAge'](1973));

//Challenge
//"Kulli is 64-year old teacher, and she has a driver's license"

/*if (kulli.hasDriversLicense = true) {
console.log(`${kulli.firstName} is ${kulli.age}-year old ${kulli.job}, and she has a driver's license.`)
} else {
    console.log(`${kulli.firstName} is ${kulli.age}-year old ${kulli.job}, but she doesn't have a driver's license.`)

}*/

//console.log(kulli.getSummary());

/*//Challenge #3

const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function() {
        this.bMI = this.weight / this.height **2
        return this.bMI;
    }   
};

const john = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function() {
        this.bMI = this.weight / this.height **2
        return this.bMI;
    }
};

mark.calcBMI();
john.calcBMI();

//console.log(mark.bMI, john.bMI);

if (mark.bMI > john.bMI) {
    console.log(`${mark.fullName}'s BMI (${mark.bMI}) is higher than ${john.fullName}'s BMI (${john.bMI})!`)
} else {console.log(`${john.fullName}'s BMI (${john.bMI}) is higher than ${mark.fullName}'s BMI (${mark.bMI})!`)
};*/

//Loop

//for loop keeps running while condition is TRUE

/*console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 3');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');
console.log('Lifting weights repetition 6');
console.log('Lifting weights repetition 7');
console.log('Lifting weights repetition 8');
console.log('Lifting weights repetition 9');
console.log('Lifting weights repetition 10');*/


//for loop keeps running while condition is TRUE

/*for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}*/

/*const kulli = [
    'Kulli',
    'Maslova',
    2037- 1973,
    'mom',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

// console.log(kulli[0]);
// console.log(kulli[1]);
// ...
// console.log(kulli[4])
// kulli[5] does not exist

for (let i = 0; i < kulli.length; i++) {
    console.log(kulli[i], typeof kulli[i]);

// Filling types array

    //types[i] = typeof kulli[i];
    types.push(typeof kulli[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
//important!!!
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log('---ONLY STRINGS---')
for (let i = 0; i < kulli.length; i++) {
    if(typeof kulli[i] !== 'string') continue;

    console.log(kulli[i], typeof kulli[i]);
}

console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < kulli.length; i++) {
    if(typeof kulli[i] === 'number') break;

    console.log(kulli[i], typeof kulli[i]);
}*/

/*const kulli = [
    'Kulli',
    'Maslova',
    2037 - 1973,
    'mom',
    ['Michael', 'Peter', 'Steven'],
    true
];

//backward loop: 4, 3 , ..., 0

for(let i = kulli.length - 1; i >= 0; i-- ) {
    console.log(i, kulli[i]);
}

//loop inside the loop

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++ ) {
       console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`); 
    }
}*/

//While loop

/*for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}*/

/*let rep = 1;
while (rep <= 10) {
//    console.log(`WHILE:Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}*/

//Challenge # 4

/*const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2);    
    totals.push (bills[i] + tips[i]);
}
console.log(bills, tips, totals);

/*for (let sum = 0; sum < bills.lenght; sum++) {
    return 
    }
}*/

const calcTip = function (bill) {
    return bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAvarage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;  
}
console.log(calcAvarage([2, 3, 7]));
console.log(calcAvarage(totals));
console.log(calcAvarage(tips));


























