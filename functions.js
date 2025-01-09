//! without parameters

// function demo(){
//     console.log("function is executing.........");
// }
// demo();


// function with parameters 
// let a = 10; // a=parameters.10=arguments
// 5,6
// 8,9
// 3,4
// function add(a,b){
//     console.log(a);
//     console.log(b);  
//     console.log(a+b);  
// }
// add(5,6);
// add(8,9);
// add(3,4);

//named function
//  function test(){
//     console.log("named function is executing");
//  }
//  test();



 //ananymus function
//  function(){
//  }
//  ();


//function expression
//  let x = function(){
//     console.log('anonymus is not executing but executing with variable');
    
//  }
//  x();

//IIFE
// (
//     function(){
//     console.log("IIFE");   
// }
// )()


// arrow function
// function demo(){
// }
// demo();

// let x =_=>{"Arrow function"};
// x();

// let x =a=>console.log(a);
// x(6);

// implicit returns and explicit returns.

function test1(a,b){
    return a+b;
}
console.log(test1(10,20));

let x = (a,b) => {return a*b};
console.log(x(5,5));

let y = (a,b) => a+b;
console.log(y(100,200));




