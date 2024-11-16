// object and array destructing
// object destructing

// const person = {
//     fname: "John Doe",
//     city: "New York",
//     age: 30,
// };
// // //old way 
// // // let fname = person.fname;
// // // let city = person.city;

// // //distructing
// const{fname, city,age} = person;
// console.log(fname+" "+ city+" "+age);


// // array destructing
// const numbers = [1,2,3,4,5];

// //old way 
// let num1 = numbers[0];
// let num2 = numbers[1];

// const [a,b,c,d,e]= numbers;

// console.log(a+" "+b+" "+c+" "+d+" "+e);

// ===================spread operator(...) to copy array or part of an array into a new array =================

// const array1 = [1,2,3,4,5];
// const array2 = [6,7,8,9,10];

// const combinedArray = [...array1,...array2];
// console.log(combinedArray);

// start main use 'rest' means spread  and end main use 'rest'
// const num1 = [1,2,3,4,5];
// const [a,b,c, ...rest] = num1;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);


// spread operator 

// const arr1 = [10,20,30,40];
// const arr2 = [...arr1];
// console.log(arr2);


// (BOM) browser object module