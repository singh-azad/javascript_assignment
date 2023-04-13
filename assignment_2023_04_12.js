// 1.
// Write a program that declares a variable using var, let, and const
// and prints the value to the console.
function variable_decl(){
  var x = 8
  let y = 9
  const z = 10
  console.log(x)
  console.log(y)
  console.log(z)
}

// 2.
// Write a program that reassigns a value to a variable
// declared with let and prints the new value to the console.

function reassigns(){
  let x = 5
  console.log(x)
  x = 6
  console.log(x)
}

// 3.
// Write a program that tries to reassign a value to a variable 
// declared with const and prints the message to the console

function reassign_const(){
  const x = 8
  x = 9
  console.log(x)
}

// 4.
// Write a program to declare a const, let, var variable
// within an if statement and try to access the variable outside the if block, what is the result?

function access_variable_outside_if(){
  if(1 == 1){
    let x = 5
    var y = 6
    const z = 7
  }

  console.log(x)
  console.log(y)
  console.log(z)
}
/*-----------------------------------------------------------------
result of the above code ::  
---------------------------                                         |
we are not able to access const and let variable and if we try      |
to acess this will give us error as they have scope only            |
inside the if block but we can acess var as it has a global scope   |
--------------------------------------------------------------------*/

// 5.
// Write a program that concatenates two or more strings and
// prints the result to the console.

function string_cncatination(){
  let text1 = "azad"
  let text2 = "singh"
  let text3 = text1.concat(" ", text2);
  console.log(text3)
}

// 6.
// Write a program that takes a string as input and prints the length
// of the string to the console.

function print_string_len(){
  let str = prompt("enter a string")
  console.log(str.length)
}

// 7.
// Write a program that converts a string to uppercase and
// prints the result to the console.

function convert_string_to_uppercase(){
  let str = prompt("enter a string to convert it into uppercase")
  console.log(str.toUpperCase())
}
