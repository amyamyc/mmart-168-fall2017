// ------------------------------------
// PART 1
// ------------------------------------
// Write a function called toggleLike. It takes no parameters
// toggleLike should find the DOM element with the id 'like'
// Now, write a conditional statement. It should check to see if the classList
// on the element contains the 'active' class
// If it does, remove the 'active' class. If it doesn't add the 'active' class.

const toggleLike = () => {
//will return string of like1 values. OnClick on index.html will run toggleLike
//function.
    //console.log(document.getElementById('like1').classList)

//looking for element that has the id 'like1'. Chaining of functions.
//and then checking to see if there is a class called "hot pink"
    //console.log(document.getElementById('like1').classList.contains('hotpink'))

//if the class list contains 'active' class
if (document.getElementById('like1').classList.contains('active')) {
  // then remove the active class
  (document.getElementById('like1').classList.remove('active'))
} else
  //else add the active class
  (document.getElementById('like1').classList.add('active'))
}

//In order to make conditional statement more flexible. Set parameters "id" to
//to the function toggleLike. const toggleLike = ('id')
//On index.html, we would pass through the id. toggleLike(like1) and toggleLike(like2)
//like1 and like2 are the variables of the function.


// ------------------------------------
// PART 2
// ------------------------------------
// Write a function called toggle that takes no parameters
// It should find a DOM element with the id 'like'
// Without writing a conditional statement,
// use the classList to toggle the 'active class'

const toggle = () => {
//toggle function is equal to what the if else statement does above.
  document.getElementById('like1').classList.toggle('active')

}
