//------------------------------------------------------------------
// PART I: Using a while loop, print the message provided 100 times
//------------------------------------------------------------------

// Defining a function here.
const name = 'John'

// Function created below as an easy way to add list items to the DOM.
// Creates a list element and appends it to the unordered list in part1
const appendListElement = (text) => {
// creates an empty list item container.
  const li = document.createElement('li')
// creates text node in the document  that contains the string stored in "text"
// variable. This is the same as the message that was passed into the function.
// "text" parameter is a variable.
  const textNode = document.createTextNode(text)
// attaches text node to the list item. adds the text in your list item container
  li.appendChild(textNode)
// find the element that has the element with id part 1 and appends the list tiem.
  document.querySelector('#part1').appendChild(li)
}

//beginning our while loop syntax
let counter = 0
while (counter < 100) {
  // make sure appendListElement definition precedes calling the function. you
  // have to define it first before calling it!
  appendListElement('Hey Dude Make me a Krabby Patty')
  ++counter
}

//Using a function here.
//appendListElement('Welcome, ' + name + '! Make yourself comfortable.')
//appendListElement('Hey Dude')



//------------------------------------------------------------------
// PART II: Using a for loop, write out each person’s avatar, name, and score, based on the people array
//------------------------------------------------------------------
// An array of objects.
//The data:
var people = [
    { name: 'Jane', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png', score: 300 },
    { name: 'Brenda', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png', score: 10} ,
     { name: 'Wanda', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png', score: 60 },
     { name: 'Maria', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png', score: 80 },
     { name: 'Jasper', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png', score: 600 },
     { name: 'Malik', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png', score: 40 }
]


// use a for loop to DRY up the printNames function
// it should loop over the people array and append
// the users avatar pic, a greeting, and their score to the HTML
const printNames = (counter) => {
  // Message 1
  // create the image
  const img1 = document.createElement('img')
  // set the source to whichever person
  img1.src = people[counter].pic
  //this shrinks the photo
  img1.classList.add('avatar')

  const paragraph1 = document.createElement('p')
  const text1 = document.createTextNode('Welcome, ' + people[counter].name + '! Your score is: ' + people[counter].score)
  paragraph1.appendChild(text1)

  document.querySelector('#part2').appendChild(img1)
  document.querySelector('#part2').appendChild(paragraph1)

// Question: When I comment out message 2, all my text for part two disappears. Why? 
// Message 2
  const img2 = document.createElement('img')
  img2.src = people[2].pic
  img2.classList.add('avatar')

  const paragraph2 = document.createElement('p')
  const text2 = document.createTextNode('Welcome, ' + people[2].name + '! Your score is: ' + people[2].score)
  paragraph2.appendChild(text2)

  document.querySelector('#part2').appendChild(img2)
  document.querySelector('#part2').appendChild(paragraph2)
}

//ARRAY + LOOP teamwork
  for (let i = 0; i < 6; i++) {
    printNames(i)
  }
