# Assignment (Day 4)

```
1. Given a string “Azad Ram Madiha Yash”. Return a string with the first letter of every word from the string. (Use built in methods).

```

Ans:

```javascript

const inputStr = "Azad Ram Madiha Yash";
const newString = inputStr.split(' ').map(word => word.charAt(0)).join('');
console.log(newString);

output:
ARMY
```

```
2. Given an array [1, -4, 12, 0, -3, 29, -150]. Calculate the sum of all positive numbers (use built in array methods).
```

Ans:

```javascript

const arr = [1, -4, 12, 0, -3, 29, -150];

const sumOfPossitiveNumbers = arr.reduce((sum, num) => {
  if (num > 0) {
    return sum + num;
  } else {
    return sum;
  }
}, 0);

console.log(sumOfPossitiveNumbers); 

output:

42
```

```
3. Given an array [1, 2, 3, 4, 5]. Create a new array with the square of each element(use built in array methods).
```
Ans:

```javascript

const arr = [1, 2, 3, 4, 5];

const squaresOfElement = arr.map(num => num ** 2);

console.log(squaresOfElement);


output:

[1, 4, 9, 16, 25]
```

```
4. Given an array [{ id: 2100, name: 'President Jacqueline' }, { id: 2114, name: 'Vice-president James' }, { id: 3016, name: 'House-captain Otis' },  { id: 4818, name: 'Prefect Finneas' }]. Create an array containing just the id of every individual. (write two solution one using iterator and another using built-in method)
```

Ans:

```javascript

//Using Built in method
const arr = [{ id: 2100, name: 'President Jacqueline' }, { id: 2114, name: 'Vice-president James' }, { id: 3016, name: 'House-captain Otis' },  { id: 4818, name: 'Prefect Finneas' }];

const arrIds = arr.map(item => item.id);

console.log(arrIds); 

output:

[2100, 2114, 3016, 4818]

//Using Iterator

const arr = [{ id: 2100, name: 'President Jacqueline' }, { id: 2114, name: 'Vice-president James' }, { id: 3016, name: 'House-captain Otis' },  { id: 4818, name: 'Prefect Finneas' }];

const arrIds = [];
for (let i = 0; i < arr.length; i++) {
  arrIds.push(arr[i].id);
}

console.log(arrIds); 


output: 

[2100, 2114, 3016, 4818]

```