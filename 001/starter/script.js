/*let js = 'amazing';
console.log(40+8+23-10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//true;
//console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas");

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

//legasy bug
console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
//error
//birthYear = 1990;
//const job;



//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas*2, ageJonas/10, 2**3);
//2**3 means 2 to the power of 3 = 2 * 2 * 2

const firstName='Kulli';
const lastName='Maslova';
console.log(firstName + ' ' + lastName);

//Assigment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++; // x = x + 1
x--; 
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const avarageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avarageAge);
*/

//Challenge #1

//let bodyMassIndex

/*const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//bodyMassIndex = mass / height ** 2;

const bodyMassIndexMark = massMark / heightMark ** 2;
const bodyMassIndexJohn = massJohn / heightJohn ** 2;
console.log(bodyMassIndexMark, bodyMassIndexJohn);

const markHigherBMI = bodyMassIndexMark > bodyMassIndexJohn;
console.log(markHigherBMI);*/

/*const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const bodyMassIndexMark = massMark / heightMark ** 2;
const bodyMassIndexJohn = massJohn / heightJohn ** 2;
const markHigherBMI = bodyMassIndexMark > bodyMassIndexJohn;
console.log(bodyMassIndexMark, bodyMassIndexJohn, markHigherBMI);*/


/*//template strings
const firstName = 'Kulli';
const job = 'mom';
const birthYear = 1973;
const year = 2037;
const kulli = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(kulli);

const kulliNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(kulliNew);

console.log(`just a regular string...`);

console.log(`String
multiple
lines`);*/

/*const age = 15;

if(age >= 18) {
    console.log(`Sarah can start driving licence 👍`); //emoji in Windows 10: Windows+.
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years ;)`);
}*/

/*if(){

} else {

}
//in () boolean statement
*/

/*const birthYear = 2021;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);*/

/*// Challenge #2

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const bodyMassIndexMark = massMark / heightMark ** 2;
const bodyMassIndexJohn = massJohn / heightJohn ** 2;
console.log(bodyMassIndexMark, bodyMassIndexJohn);
if(bodyMassIndexMark > bodyMassIndexJohn){
    console.log(`Mark's BMI (${bodyMassIndexMark}) is higher that John's (${bodyMassIndexJohn})!`);
} else {
    console.log(`John's BMI (${bodyMassIndexJohn}) is higher than Marks's (${bodyMassIndexMark})!`);
};*/

//Type of Conversion

/*const inputYear = '1991';
//to fix we need to change string to number
console.log(Number(inputYear), inputYear);  //capital letter Number
console.log(Number(inputYear) + 18);

console.log(String(23), 23);

//Type of Coercion

console.log('I am ' + 23 + ' years old')
console.log('I am ' + '23' + ' years old')

console.log('23' - '10' - 3);
console.log('23' + '10' - 3); //with + numbers are converted to strings
console.log('23' / '2');
console.log("23" > "18");// all other sings strings are converted to numbers*/

//5 Falsy values: 0, '', undefined, null, NaN

/*// == and === and !==
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 55) { //55 === 55
    console.log("Cool! 55 is amazing number!");
} else if(favourite === 89) {
    console.log('89 is also a cool number')
} else {
    console.log ('Number is not 55 or 89')
}

if(favourite !== 33) console.log('Why not 33?')*/

//logical operators

/*const hasDriversLicense = true; //A
const hasGoodVision = false //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}*/

/*//Challenge #3

//const gameDolphins1 = 96;
//const gameDolphins2 = 108;
//const gameDolphins3 = 89;

//const gameKoalas1 = 88;
//const gameKoalas2 = 91;
//const gameKoalas3 = 110;

//const gameDolphins1 = 97;
//const gameDolphins2 = 112;
//const gameDolphins3 = 101;

//const gameKoalas1 = 109;
//const gameKoalas2 = 95;
//const gameKoalas3 = 123;

const gameDolphins1 = 97;
const gameDolphins2 = 112;
const gameDolphins3 = 101;

const gameKoalas1 = 109;
const gameKoalas2 = 95;
const gameKoalas3 = 106;

const avarageScoreDolphins = (gameDolphins1 + gameDolphins2 + gameDolphins3) / 3;
const avarageScoreKoalas = (gameKoalas1 + gameKoalas2 + gameKoalas3) / 3;

console.log(avarageScoreDolphins, avarageScoreKoalas);


/*if (avarageScoreDolphins > avarageScoreKoalas) {
    console.log("Winner is Dolphins!");
} else if (avarageScoreDolphins < avarageScoreKoalas)  {
    console.log("Winners are Koalas!");
} else if (avarageScoreDolphins === avarageScoreKoalas) {
    console.log("Both win the trophy!");
}

if (avarageScoreDolphins > avarageScoreKoalas && avarageScoreDolphins >=100) {
    console.log("Winner is Dolphins!");
} else if (avarageScoreDolphins < avarageScoreKoalas && avarageScoreKoalas >= 100)  {
    console.log("Winners are Koalas!");
} else if (avarageScoreDolphins === avarageScoreKoalas && avarageScoreDolphins >= 100 && avarageScoreKoalas >= 100) {
    console.log("Both win the trophy!");
} else {
    console.log("Nobody wins the trophy 😢")
}
*/



