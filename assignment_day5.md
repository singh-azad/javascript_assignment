## 1.What is an IIFE (Immediately Invoked Function Expression) and why would you use it in JavaScript? Give an example of IIFE.

**ans:**

IIFE is a function that runs as soon as it is defined. It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

Example:

```javascript
(function () {
    var aName = "Barry";
})();

```

## 2.What is the purpose of using the bind() method in JavaScript and how is it different from call() and apply()?

**ans:**

The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

The call() method calls a function with a given this value and arguments provided individually.

The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

example:
  
  ```javascript
  var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined


var boundGetX = unboundGetX.bind(module);

console.log(boundGetX());
// expected output: 42
```


## 3.What is a Higher-Order Function (HOF) in JavaScript and how is it different from regular functions? Explain with an example.

**ans:**

A Higher-Order function is a function that receives a function as an argument or returns the function as output.

Example:

```javascript
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function calculator(a, b, operator) {
    return operator(a, b);
}

calculator(3, 4, add); // 7
calculator(3, 4, subtract); // -1
calculator(3, 4, multiply); // 12
```
## 4.Write a function called multiplyBy that takes a number as input and returns a new function that multiplies any number passed into it by the original number.

**ans:**

```javascript
function multiplyBy(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

const triple = multiplyBy(3);
triple(5); // 15
triple(6); // 18
triple(7); // 21
```

## 5.Write a function named sortArray that takes in two parameters:
1. An array of numbers
2. A boolean value ascending that indicates whether the array should be sorted in ascending or descending order.

The sortArray function should return the sorted array. Use an anonymous function to do the actual sorting, rather than using the built-in sort method.


**ans:**

```javascript
function sortArray(arr, ascending) {
    return arr.sort(function(a, b) {
        if (ascending) {
            return a - b;
        } else {
            return b - a;
        }
    });
}

```

