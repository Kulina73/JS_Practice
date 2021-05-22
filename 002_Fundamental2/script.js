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

const friends = ['Michael', 'Steven', 'Peter'];

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
}