//------------------------------------------------------------------
// PART I
//------------------------------------------------------------------
//Create a function that appends an "li" element to an unordered list
// ("ul" element) in the DOM. This function should take a string as a
// parameter. In the body of the function, there should be code that
// appends an "li" element, with the string inside, to the un-ordered
// list ("ul" tag):

//Part 3A
//Amys Note: putting li elements to the unordered list. 'output' is id
//located in index html unordered list.
//"message" allows flexibility in the hello message.
//+= appends instead of replaces

const addListItemToUnorderedHTMLList = (message) => {
  // add "li" tag to "ul" tag
  document.getElementById('output').innerHTML += "<li> Hello, " + message + " </li>"
}

//addListItemToUnorderedHTMLList("Girl")
//addListItemToUnorderedHTMLList("Friend")
//addListItemToUnorderedHTMLList("Boy")


//------------------------------------------------------------------
// PART II
//------------------------------------------------------------------
// Using the strategy of your choice, write a loop over the numbers
// 1 - 100 that satisfies the following conditions:
//
// 1. If the number is divisible by 3, append "Fizz" to the unordered list
// 2. If the number is divisible by 5, append "Buzz" to the unordered list
// 3. If the number is divisible by 3 AND 5, append "FizzBuzz" to the unordered list.
// 4. Bonus points: Include both the number *and* the word you've appended to the list

//3 conditions
//let i=0   <--executes this one time before the loop begins. only once at the beggining
//i<100     <--it checks this condition every time the function loops. If condition is true,
//             keeps looping. otherwise, ends. Is 0 less than 100? Is it True or False?
//             False. 100 will break the loop.
//i++      <-- it executes everytime the loop runs. In this case, adds number automatically.

//addListItemToUnorderedHTMLList(i) allows for us to print the numbers on the
//list.

for (let i=0; i<100; i++) {
  //console.log(i)
  //addListItemToUnorderedHTMLList(i)
  //ORDER MATTERS!! If condtion is met, it exits. 
if (i % 3 === 0 && i % 5 === 0) {
    addListItemToUnorderedHTMLList("FizzBuzz")
  } else if (i % 3 === 0) {
    addListItemToUnorderedHTMLList("Fizz")
  } else if (i % 5 === 0) {
    addListItemToUnorderedHTMLList("Buzz")
  } else {
    addListItemToUnorderedHTMLList(i)
  }
}
