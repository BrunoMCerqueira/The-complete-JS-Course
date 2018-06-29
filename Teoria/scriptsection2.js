// Exercicío 9.
/*
var name = "Luana";
console.log(name);

var lastName = "Perin";
console.log(lastName);

var age = "25";
console.log(age);

var fullAge =true;
console.log(fullAge);


// Lecture 10.

// var name = 'Bruno';
// var age = 27;

//console.log(name + age);
//console.log(age + age);

// var job, isMarried;

//console.log(job);

// job = 'Desenvolvedor';
isMarried = false;

console.log(name + " tiene " + age + " anos y es " + job + ". Está casado? " + isMarried + ".");

age = "vinte e sete";
job = "Desempregado.";

console.log(name + " tiene " + age + " anos y es " + job + ". Está casado? " + isMarried + ".");

//var lastName = prompt('Qual é o sobrenome?');

//console.log(lastName)

alert(name + " tiene " + age + " anos y es " + job + ". Está casado? " + isMarried + ".");


// Lecture 11: operators.

var now = 2016;

var birthYear = now - 26;

birthYear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);


// Lecture 12: if/else statements

var name = "John";
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
  console.log(name + 'is married!');

} else {
  console.log(name + 'se casará pronto!! :)');
}

isMarried = false;
/*
if(isMarried) {
  console.log("YES!");
} else {
  console.log("No!");
}

if(isMarried) {
  console.log("YES!");
}


if (23 == "23") {
  console.log('printar');
}


// Lecture 12: boolean and switch

var age = 20;

if(age < 20) {
  console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
  console.log('John is a young man.');
} else {
  console.log('John is a man.');
};

var job = 'teacher';

job = prompt('What does john do?');

switch(job) {
  case 'teacher':
    console.log('John teaches kids.');
    break;
  case 'driver':
    console.log('John drives a cab,');
    break;
  case 'cop':
    console.log('John is batman!');
    break;
  default:
    console.log('John doesnt exist!');
}


///// Coding Challenge 1


var firstContest = prompt("Qual é seu nome?");
var firstContestage = prompt("Qual é sua idade?");
var firstContestheight = prompt("Qual é sua altura?");
var firstContestPoints = firstContestheight + 5 * firstContestage
console.log('O primeiro concursante é ' + firstContest);
var secondContest = prompt("Qual é seu nome?");
var secondContestage = prompt("Qual é sua idade?");
var secondContestheight = prompt("Qual é sua altura?");
var secondContestPoints = secondContestheight + 5 * secondContestage
console.log('O segundo concursante é ' + secondContest);
if (secondContestPoints < firstContestPoints) {
  console.log(firstContest + "ganhou!")
} else if (secondContestPoints > firstContestPoints) {
  console.log(secondContest + " ganhou!!")
} else {
  console.log("Empate!!")
};


///////////////////////////////////////////////////////////////////////////
//// Lecture: 16 Functions

function calculateAge(yearOfBirth) {
  var age = 2017 - yearOfBirth;
  return age;
};

var ageJohn = calculateAge(1990);
var ageMark = calculateAge(1969);
var ageMary = calculateAge(1948);


function yearsUntilRetirement(name, yearOfBirth) {
  var age = calculateAge(yearOfBirth);
  var retirement = 65 - age;
  if (retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years.');
  } else {
    console.log(name + " is already retired.");
  }
};



yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948)


////////////////////////////////////////////////////////////////
////////// Lecture: 17 Statements and expressions

function someFun(par) {
  //code
}

var someFun = function(par) {
  //code
}

// Expressions

var x = 3;
3 + 4;

// Statements
if (x === 5) {
  // do something
}


////////////////////////////////////////////////////////////////
///////// Lecture: 18 Arrays

var names = ['John', 'Jame', 'Mark'];
var years = new Array(1998, 1969, 1948);

console.log(names[0]);
names[1] = 'Ben';
console.log(names);


var john = ['John', 'Smith', 1990, 'fireman', false];

john.push('blue');
john.unshift('mister');
john.pop();
john.shift();

console.log(john);


// alert(john.indexOf('Smith'));

if (john.indexOf('teacher') === -1) {
  console.log('John is not a teacher.');
}

//////////////////////////////////////////////////////////////////
///////////////////// Lecture: 19 Objects
*/
/*

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john.job = 'programmer';

console.log(john);

var jane = new Object();

jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane.isMarried = true;

console.log(jane)

var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: '1990',
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function(yearOfBirth) {
    return 2017 - yearOfBirth;
  }
};


console.log(john.family[2]);
console.log(john.calculateAge(john.yearOfBirth));

var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: '1990',
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    return 2017 - this.yearOfBirth;
  }
};


console.log(john);
console.log(john.calculateAge());
// var calculateAge = function(yearOfBirth)

var age = john.calculateAge();
john.age = age;
console.log(john)

*/

/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: '1990',
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    //return 2017 - this.yearOfBirth;
    this.age = 2017 - this.yearOfBirth;
  }
};

john.calculateAge();
console.log(john.age);

*/

/////////////////////////////////////////
////////// Lecture 20: Loops

/*
for (var i = 0; i < 10; i++) {
  console.log(i);
};

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob', 'Andrés', 'Juan'];


for (var i = 0; i < names.length; i ++) {
    console.log(names[i]);
};


for (var i = names.length - 1; i >= 0; i --) {
    console.log(names[i]);
};

var i = 0;
while (i < names.length) {
  console.log(names[i]);
  if (i === 3) {
    break;
  }
  i++;
};



var i = 0;
for (var i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
};
*/
////////////////////////////////////////
//////////////////// CODING CHALLENGE 2
/*
var ages = [1950, 2014, 1950, 2015, 1943, 1969];

var whatAge = [];

for (i = 0; i < ages.length; i++) {
    whatAge.push(2017 - ages[i]);
};

var fullAge = function (ageOfBirth) {
  if (ageOfBirth >= 18) {
    return true;
  } else {
    return false;
  };
};

//console.log(whatAge)

*/
/*for (i = 0; i < ages.length; i++) {
    console.log(fullAge(ages[i]));
    console.log(whatAge[i]);
};
*/
/*
var printFullAge = function (ages) {
  whatAge = [];
  for (i = 0; i < ages.length; i++) {
    whatAge.push(2017 - ages[i]);
  };
  for (i = 0; i < ages.length; i++) {
    console.log(fullAge(whatAge[i]));
  };
}

printFullAge(ages);
*/



//////////////////////////////////////////
//////////////////
