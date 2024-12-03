// String as an object 
// length method 
// let data  = "javascript";
// let data1 = " is a great language";

// let output = data.length;
// concat mathode 
// output = data.concat(data1);
// output = data+(data1);

// console.log(output);
// output = data.at(5);
// output = data.charAt(3);
// output = data.charCodeAt(9);
// console.log(output);
// // at , charAt , charCodeAt ,[] for getting the element at location

// slcing , substring, substr
// slcing (startingpoint , endingpoint)
//slicing
// let data  = "javascript";
// output = data.slice(0,10);
// output = data.slice(-16,-5);
// if you second value , it will slicie the rest of the string
// output = data.slice(-5);
// console.log(output);

// substring
// let data  = "javascript";
// output = data.substring(-12,7);

// console.log(output);

// substr
// substr (startingpoint, no of characters)
// let data  = "javascript";
// output = data.substr(0,7);

// console.log(output);

// uper case

// let data  = "javascript";
// output = data.toUpperCase();
// console.log(output);

// lower case 
// let data  = "JAVASCRIPT";
// output = data.toLowerCase();
// console.log(output);

// trim method
// trim method removes the white space from string 
// let data  = "javascript";
// output = data.length;
// output = data.trim();
// console.log(output);

// indexof() method - (case-senstive,gets the first occurence)
// let data1 = "javascript is a great language and we have shuld learn Javascript";
// output = data1.indexOf("Javascript");
// output = data1.indexOf("and" ,12);
// console.log(output);

// search 
// let data1 = "Javascript is a great language  and we have shuld learn javascript";
// output = data1.search(/is/);
// // output = data1.search(/javascript/);
// console.log(output);

// match method 

// let para = `Mr Microsoft is working in microsoft company and he loves working in Microsoft `;

// let output;
//match method returns  array of matched value 
//by default it selects first value 
// if you want all the values use regular expression with /word/g (global)
// case - sensitive remove /word/i
// output = para.match("Microsoft");
// output = para.match(/Microsoft/gi);
// output = para.match(/Microsoft/g);
// output = para.match(/Microsoft/i);

// document.getElementById("demo").innerHTML = output + typeof output;

// global method replace // replaceAll
// let para = `Mr Microsoft is working in microsoft company and he loves working in Microsoft `;
// let output;
// output = para.replace(/Microsoft/g, "Google");
// output = para.replace(/Microsoft/gi, "google");
// output = para.replaceAll("Microsoft ", "Accenture");
// // i stand for casesensitive g stand for globle 
// document.getElementById("demo").innerHTML = output;

// split method
// split method convert to array
// let mystring = "Apple.Banana.Graphics.Watermelon";
// output = mystring.split(".");
// document.getElementById("demo").innerHTML = output; 