// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

let array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.

array.shift();

// 2. Sort the array in order.

array.sort();

// 3. Put "Kiwi" at the end of the array.

array.push("Kiwi");

// 4. Remove "Apples" from the array.

array.splice(0,1);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
// you should have at the end: ["Kiwi", "Oranges", "Blueberries"]

array.reverse();


// using this array,
// var array2 = ["Banana",   ["Apples",   ["Oranges"], "Blueberries"];
// access "Oranges".

// notes; this took me a good 10 mins to figure out but basically array0 is banana which has 3 items in it, but they are arrays,
// so to access Oranges, which is item 2 in array 1, we look for item 1 in array 0 (apples, because item 0 is banana) and item 1, because item 0 is apples)
//

// Time: 18 mins, trying to understand last part