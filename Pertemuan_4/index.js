// function greetings() {
//     return "Hello";
// }

// const greetings = function () {
//     return "Hello";
// }

// console.log (greetings());
// function greetings(){
//     return "Hello";
// }

// const output = (function () {
//     return "Hello LIFE";
// }) ();

// console.log(output)

//CallBack Function

function createGreetings(name, callback){
    const greetings = "Hello " + name;
    callback(greetings);
}
function logGreetings(greetings){
    console.log(greetings);
}
createGreetings("John",logGreetings);