var names = ["haseeb", "ahmed", "saeed", "ali"];

// Length of Array
console.log(names.length);

// Iterating over Array (Printing Values)
for (const el of names) {
  console.log(el);
}

// Iterating over Array (Printing Index)
for (const el in names) {
  console.log(el);
}

// METHODS OF JAVASCRIPT
/*
-push
-pop
-shift
-unshift
-find
-forEach
-findIndex
-indexOf
-fill
-splice
-slice
-reverse
-map
-filter
-sort
-concat
-every
-some
-includes
-join
-reduce
*/

// PUSH()
var names = ["haseeb", "ahmed", "saeed", "ali"];
names.push("butt"); // Final Array => ["haseeb", "ahmed", "saeed", "ali", "butt"]

// POP()
var names = ["haseeb", "ahmed", "saeed", "ali"];
names.pop(); // Returns last element from Array

// SHIFT()
var names = ["haseeb", "ahmed", "saeed", "ali"];
names.shift(); // Returns the first element from Array

// UNSHIFT()
var names = ["haseeb", "ahmed", "saeed", "ali"];
names.unshift("Muhammad"); // Insert the element at First Index of Array

// FIND()
var names = ["haseeb", "ahmed", "saeed", "ali"];
var found = names.find((el) => el.length > 4); // It returns the first element if condition true.

// FOREACH()
var names = ["haseeb", "ahmed", "saeed", "ali"];
names.forEach((el) => console.log(el)); // It iterates over the Array like For Loop.

// FINDINDEX()
var names = ["haseeb", "ahmed", "saeed", "ali"];
var indexOfAhmed = names.findIndex((el) => el === "ahmed"); // Returns Index of Element from Array

// INDEXOF()
var names = ["haseeb", "ahmed", "saeed", "ali"];
names.indexOf("Butt"); // Returns index of Given String

// FILL()
var numbers = new Array(4);
numbers.fill(10); // Fill Array with static value i.e. [10, 10, 10. 10]

// SPLICE()
var names = ["haseeb", "ahmed", "saeed", "ali"];
names.splice(2, 2); // Removes items to/from an array.
// 2 -> Index to remove
// 2 -> No. of elements to remove from Index 2

var names = ["haseeb", "ali", "saad", "john"];
names.splice(1, 2, "ahmed", "saeed");
// Adds "ahmed", "saeed" at Index 1
// 2 is how many items to be removed after adding.

// SLICE()
var names = ["Muhammad", "haseeb", "ahmed", "saeed"];
names.slice(1, 3); // Returns slice out of Array => ["haseeb", "ahmed"]

// REVERSE()
var names = ["Muhammad", "haseeb", "ahmed", "saeed"];
names.reverse(); // Reverse the elements inside Array

// MAP()
var numbers = [1, 2, 3, 4, 5];
// Creates a new Array after performing some operation
var newNumbers = numbers.map((el) => 10 + el); // Output: [11, 21, 31, 41, 51]

// FILTER()
var names = ["Muhammad", "haseeb", "ahmed", "saeed"];
// Creates a new Array with only elements satifying the condition.
names.filter((el) => el.length > 5); // Output: [true, true, false, false]

// SORT()
var random = [5, 8, 1, 2];
random.sort(); // Output: [1, 2, 5, 8]
random.sort((el) => el < 5); // Output: [ 1, 2, 5, 8 ]
random.sort((el) => el > 5); // Output: [ 5, 8, 1, 2 ]

// CONCAT()
var names1 = ["A", "B", "C"];
var names2 = ["X", "Y", "Z"];
var newArray = names1.concat(names2); // Output: ['A', 'B', 'C', 'X', 'Y', 'Z']

// EVERY()
var random = [5, 8, 1, 2];
// It checks every element and returns True/False on condition.
random.every((el) => el < 5); // Output: [ false, false, true, true ]
random.every((el) => el > 5); // Output: [ true, true, false, false ]

// SOME()
var random = [5, 8, 1, 2];
// It checks if atleast one element fulfil the condition, Returns True/False.
var axn = random.some((el) => el < 5); // Output: [ false, false, true, true ]
random.some((el) => el > 5); // Output: [ true, true, false, false ]

// INCLUDES()
var names = ["A", "B", "C"];
names.includes("B"); // Output: True
names.includes("X"); // Output: False

// JOIN()
var names = ["h", "a", "s", "e", "e", "b"];
names.join(""); // Returns => haseeb

// REDUCE()
var numbers = [1, 2, 3, 4, 5, 6];
// It has two parameters.
// total works as accumulator, current is current value from Array
const reducedNum = numbers.reduce((total, current) => total + current); // Output: 21
