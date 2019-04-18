// object
let userObject = {
    name: 'Adam',
    age: 28,
    favoriteFruits: ['mango', 'raspberry', 'blueberry'],
    car: {
        make: 'Honda',
        model: 'Civic',
        isFunctional: true
    }
};

if (userObject.age >= 21) {
    console.log('This user is allowed to drink');
} else {
    console.log('This user is not allowed to drink!');
}

console.log(userObject.name);
console.log(userObject.age);
console.log(userObject.favoriteFruits);
console.log(userObject.favoriteFruits[0]);

console.log(userObject.car.isFunctional);

let user = 'Adam';

if (user) {
    console.log('Goodbye, ' + user + '!')
} else {
    console.log('Goodbye!');
}

// Falsy values in JavaScript
/* 
    false
    null
    undefined
    0
    NaN
    ''
    "" 
*/

