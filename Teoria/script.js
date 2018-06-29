
// Lecture: let and const


// ES5
/*
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5);

// ES6

const name6 = 'Mike Miller';
let age6 = 21;
name6 = 'Jane Miller';


// ES5

function driversLicense5(passedTest) {
  if(passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1995;
  }

  console.log(firstName + ' born in ' + yearOfBirth);
};
driversLicense5(true);


// ES6

function driversLicense6(passedTest) {
  if(passedTest) {
    let firstName = 'John';
    const yearOfBirth = 1995;

  }
  console.log(firstName + ' baorn in ' + yearOfBirth);
};
driversLicense6(true);

// Lecture: blocks

// Instead functions invoke ---- blocks to separate variables

// ES5

(function(){
  // code...
})()

// ES6

{
  //code...
}

*/
// Lecture: Strings 

var variable = 'sdas';
let variable6 = 'New';

// ES5

console.log("sadsafds" + variable);

// ES6

console.log(`This is great ${variable6}`);

// new methods 

const n = `${variable6}`;

console.log(n.startsWith('N'));
console.log(n.endsWith('w'));
console.log(n.includes('e'));
console.log(`${n} `.repeat(5));

// Lecture: Array

const years = [1994, 1980, 1934];

// ES5

var ages5 = years.map(function(year){
  return 2018 - year;
});

console.log(ages5);

//ES6

let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => 
  `Age element ${index + 1}: ${2018 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const age = 2018 - el
  return  `Age element ${index + 1}: ${age + 1}.`
 });

console.log(ages6);

// Lecture: Arrow Functions 

// ES5 variables of box5 are not access for second function (event function);
// We have to create a self variable inside clickMe.

var box5 = {
  color: 'green',
  position: 1,
  clickMe: function(){
    var self = this;
    document.querySelector('.green').addEventListener('click', function(){
      var str = 'This box number is ' + self.position + ' and it is ' + self.color;
      alert(str);
    })
  }
}

box5.clickMe();

// ES6 Here we can acces the variables from box6, because we dont create a function, we use =>

const box6 = {
  color: 'blue',
  position: 2,
  clickMe: function(){
    
    document.querySelector('.blue').addEventListener('click', () => {
      var str = 'This box number is ' + this.position + ' and it is ' + this.color;
      alert(str);
    })
  }
}

box6.clickMe();

// Leture: Destruturing

// ES5
var john5 = ['John', 23];
var name5 = john5[0];
var age5 = john5[1];

//ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
  firstName: 'Andres',
  lastName: 'Miller'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

function calcAgeRetirement(year) {
  const age2 = new Date().getFullYear() - year;
  return [age2, 65 - age2];
}

const [age2, retirement] = calcAgeRetirement(1990);

console.log(age2);
console.log(retirement);

// Lecture: Arrays

const boxes = document.querySelectorAll('.box');

// ES5

var boxArr5 = Array.prototype.slice.call(boxes);
boxArr5.forEach(function(cur) {
  cur.style.backgroundColor = 'dodgerblue';
})


//ES 6

const boxArr6 = Array.from(boxes);

boxArr6.forEach(cur => 
  cur.style.backgroundColor = 'dodgerblue');

// Loop with breaks or continue

//ES 5

for(var i = 0; i < boxArr5.length; i++) {
  
  if(boxArr5[i].className === 'box blue') {
    continue;
  }

  boxArr5[i].textContent = 'Im changed to blue';
}

// ES6

for(const cur of boxArr6) {
  if(cur.className.includes('blue')){
    continue;
  }
  cur.textContent = 'Im changed';
}

// Other methods

// ES5

var ages = [12, 32, 18, 23];

var fullAge = ages.map(function(cur){
  return cur >= 18;
})

console.log(fullAge);

fullAge.indexOf(true);
age[fullAge.indexOf(true)];

// ES6

ages.findIndex(cur => cur >= 18);
console.log(ages.find(cur => cur >= 18));

// Lecture: Spread operator

function addFourAges(a, b, c ,d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 20, 22, 42);
console.log(sum1);

//ES5
var ages = [18, 20, 22, 42];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const max3 = addFourAges(...ages);
console.log(max3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob'];

const bigFamily = [...familyMiller, 'Lily', ...familySmith];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxess = document.querySelectorAll('.box');
const all = [h, ...boxess];

Array.from(all).forEach(cur => cur.style.color = 'purple');

// Lecture: Rest Parameters

//ES5
function isFullAge55(){
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function(cur){
    console.log((2018 - cur) >= 18);
  });
};


isFullAge55(1990, 2002, 1965);

//ES6
function isFullAge6(...years){
  years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 2002, 2005);



// Lecture: Default Parameters

// ES5
function smithPerson(firstName, yearOfBirth, lastName, nationaloty) {
  
  lastName === undefined ? lastName = 'Smith' : lastName = lastName;
  nationaloty === undefined ? nationaloty = 'american' : nationaloty = nationaloty;
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationaloty = nationaloty;
}

var andres = new smithPerson('John', 1990, 'Montes');


// ES6

function montesPerson(firstName, yearOfBirth, lastName = 'Montes', nationaloty = 'Espanol') {
  
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationaloty = nationaloty;
}

var andre = new montesPerson('Andre', 1990);


// Lecture: MAP ;;; NEW in ES6.

const question = new Map();
question.set('question', 'What is the name of Spain capital?');

question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'Madrid');
question.set('correct', 3);
question.set(true, 'Correct');
question.set(false, 'Wrong');

console.log(question.get('question'));
console.log(question.size);
/*
console.log(question.has(2));
question.delete(2);
console.log(question.has(2));
question.clear();
console.log(question);
*/

// Can loop in maps

question.forEach((value, key) => 
  console.log(`This is the key: ${key} and the value: 
  ${value}`));

for(let [key, value] of question.entries()){
  if(typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
};

const ans = parseInt(prompt('Write answer'));

console.log(question.get(ans === question.get('correct')));


/////////////////////////////////////////////////////////////////
/// Lecture: Classes

//ES5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

}


Person5.prototype.calculateAge = function(){
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}


var john55 = new Person5('john', 1990, 'teacher');

//ES6

class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;    
  }

  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
/*
  static greeting() {
    console.log('heww');
  }
*/
}

const john66 = new Person6('john', 1991, 'teeacher');

///////////////////////////////////
/// Lecture: Classes and sub classes

// ES5

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {

  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

var jonhAthlete = new Athlete5('John', 1995, 'runner', 3, 10);

jonhAthlete.calculateAge();

// ES6

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals){
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}


const jonhAthlete6 = new Athlete6('John', 1992, 'runner', 3, 10);
jonhAthlete6.wonMedal();
jonhAthlete6.calculateAge();

/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/



class Element {
  constructor (name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }

  calculateAge() {
    var age = new Date().getFullYear() - this.buildYear;
    return age;
  }
}

class Park extends Element {
  constructor (name, buildYear, trees, area) {
    super(name, buildYear);
    this.trees = trees;
    this.area = area;
  }

  treeDensity() {
    var treeDens = this.trees / this.area;
    return treeDens;
  }
}

let centerPark = new Park('Saint Patrick', 1992, 300, 10);
let southPark = new Park('John Carles I', 1952, 1230, 30);
let westPark = new Park('Beireden', 1892, 600, 16);
let parks = [centerPark, southPark, westPark];

function calcAverageAge(arr) {
  var sumAge = 0;
  arr.forEach(cur => {
    sumAge = sumAge + cur.calculateAge();
  })
  return sumAge / arr.length;
}

let moreThanThousand = parks.map(function(cur){
  return cur.trees > 1000;
})

let parkWithThoTrees = parks[moreThanThousand.indexOf(true)];

console.log('------PARKS REPORT------');
console.log(`Our ${parks.length} parks have an average age of ${calcAverageAge(parks)} years.`);
parks.forEach(cur => console.log(`${cur.name} has a tree density of ${cur.treeDensity()} trees per square Km`));
console.log(`${parkWithThoTrees.name} has more than 1000 trees.`);

/*
4. Total and average length of the town's streets.
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal.
*/


class Street extends Element {
  constructor (name, buildYear, streetLength, sizeClassification = 'normal') {
    super(name, buildYear);
    this.streetLength = streetLength;
    this.sizeClassification = sizeClassification;
  }

  classificate() {
    if(this.streetLength < 0.3) {
      this.sizeClassification = 'tiny';
    } else if (this.streetLength < 1) {
      this.sizeClassification = 'small';
    } else if (this.streetLength < 3) {
      this.sizeClassification = 'normal';
    } else if (this.streetLength < 10) {
      this.sizeClassification = 'big';
    } else {
      this.sizeClassification = 'huge';
    }
    return this.sizeClassification;
  }
}

function calcTotalAveragelength(arr) {
  var sumLength = 0;
  arr.forEach(cur => {
    sumLength = sumLength + cur.streetLength;
  })
  return [sumLength / arr.length, sumLength];
}

let centerStreet = new Street('Central Park Avenue', 1980, 5);
let southStreet = new Street('5th Avenue', 1974, 2);
let westStreet = new Street('Market Avenue', 1995, 0.4);
let northStreet = new Street('Sunset Boulevard', 1765, 16);

let streets = [centerStreet, southStreet, westStreet, northStreet];

console.log('------STREETS REPORT------');
console.log(`Our ${streets.length} streets have a total length of ${calcTotalAveragelength(streets)[1]} km, with an average of ${calcTotalAveragelength(streets)[0]} km.`);
streets.forEach(cur => console.log(`${cur.name}, built in ${cur.buildYear}, is a ${cur.classificate()} street.`));
