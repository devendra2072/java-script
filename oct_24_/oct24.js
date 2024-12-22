// const cars = ["bmw","mercedes","Thar","toyota","tata"];

// console.log(Array.isArray(cars));

// const newCars = cars.toString();
// console.log(newCars);

// // join also converts array to string but provides a separator

// const newArray = cars.join("*");
// console.log(newArray);

// // sort method  sort the items alphabaticly

// console.log(cars.sort());

// const sortedArray = cars.sort();

// const reversedArray = sortedArray.reverse();
// console.log(reversedArray);

// // pop method  returns the removed element and removes the last element
// let h1 = document.getElementById("demo")
// const fruits = ["banana","apple","orrange",];

// fruits.pop();
// h1.innerHTML = fruits;

// // push method  adds element to the last  and returns the no of element
// fruits.push("Guava");
// h1.innerHTML = fruits;

// // remove method removes first element and returs the removed item
// fruits.shift();
// h1.innerHTML = fruits;
// // h1.innerHTML = fruits.shift();

// // unshift add first element and return length of array
// fruits.unshift("mango");
// h1.innerHTML = fruits;
// // h1.innerHTML = fruits.unshift();

// // concat

// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9,10];
// const arr3 = [11,12,13,14,15];
// const arr4 = arr1.concat(arr2,arr3);
// h1.innerHTML = arr4;

// // slice method creates a new array from a given array
// // and returns a new array containing the selected elements
// // but the last element is excluded
// // const sliceArray = arr4.slice(0,4);
// const sliceArray = arr4.slice(3);
// h1.innerHTML = sliceArray;

const names = ["nimish", "hariom", "devendra", "vishvash", "aman"];

// slicing (starting position , number of elements to remove,)
// elements to add ...)
const newNames = names.splice(2, 3, "hello", "mohit");

// const newNames = names.splice(2,4)

console.log(names);

// compaire function

// // assending order
// const numbers = [20,45,7866,1,98,123];
// const sortednumberAsc = numbers.sort(function (a,b){
//     return a- b;

// })

// console.log(sortednumberAsc);

// desending order

// const numbers = [20, 45, 7866, 1, 98, 123];
// const sortednumberAsc = numbers.sort(function (a, b) {
//   return  b - a;
// });

// console.log(sortednumberAsc);
