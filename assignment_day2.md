# Assignment (Day 2)
```

## If we execute this Javascript, what will the browser's console show?

var text = 'outside'; 
function logIt(){
  console.log(text);
  var text = 'inside';
};
logIt();

```

**Ans=>** It will give a output **undefined**. In the function **logIt()** when we try to console **text** it will first search **text** variable in the current scope as the **text** variable is of type var so it is **hoisted** near to the top of the **function** 

2.Write a regular expression  to reverse the first and last name

Ans: 

```javascript

const name = "Azad Singh";
const reverseName = name.replace(/^(\w+)\s(\w+)$/, "$2 $1");
console.log(reverseName);

```

```
3. Write a Regular expression to validate email address
```

Ans:

```javascript
const email = "azad.singh@kreeti.com";
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const isValid = emailPattern.test(email);
console.log(isValid);
```

```
4. Find the Output
```
```javascript
 var x = 100;
    console.log(x);
     
    function test(){
        var x = 250;
        console.log(x);
     
        if (x > 100) {
            let x = 350;
            console.log(x);
        }
     
        console.log(x);
    }
     
    test();
    console.log(x);
```

Ans:

The output of the above program will be 100 250 350 250 100

```
5. What is the difference of output between these two expressions? Give your reasons for it:
  a. 12 == “12”
  b. 12 === “12”
  c. Number(12) === 12

```

Ans: 

a. It will output true . Because with "==" javascript check the value of the expression not the data types so both expressions value are same so it will return true.

b. It will output false. Because with "===" javascript check the value of the expression as well as the datatype of the expression. As the datatype of the expressions are different it will return false.

c. It will output true because the value and the datatype of the expressions are same so it will return true.

```
6. What is NaN?
```

Ans:

NaN stands for "Not a Number" and is a special value in JavaScript that represents the result of an operation that is not a number.

