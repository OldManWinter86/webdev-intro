// and operator comparisons
/* 
    true && true   // true
    true && false  // false
    false && true  // false
    false && false // false
*/

// or operator comparisons
/* 
    true || true // true
    true || false // true
    false || true // true
    false || false // false
*/

let myUser = {
    name: 'Adam Morgan',
    age: 28
};

let username = 'adammorgan';
let language = ['javascript', 'ruby', 'python'];

console.log(myUser.name);
console.log(username.length);


if (username.length < 5) {
    console.log('Your username is too short.')
} else {
    console.log('Your username meets the length requirements');
}


let password = '123'

if (username.length > 5 && password.length > 5) {
    console.log('Your username and password meet the required length');
} else {
    console.log('Your username or password is too short');
}


let user1 = {
    isAdmin: false,
    isModerator: true
};

if (user.isAdmin || user.isModerator) {
    console.log('I only care about one of these! They are authorized!');
} else {
    console.log("Don't let them in");
}

console.log(username.toLowerCase());
console.log(username.toUpperCase());