const beyonceTweet = {
    name: 'Beyoncé',
    handle: '@beyonce',
    text: '#LEMONADE the Visual Album.'
}

const links = [
'https://twitter.com/mmart168',
'https://twitter.com/beyonce',
'http://www.billboard.com/files/media/beyonce-2016-press-Parkwood-Entertainment-Lemonade-billboard-1548-650-4.jpg']

const modifyText = () => {
  //document.querySelector('#freebie').innerHTML = 'Example Freebie!'
  //console.log('modifying text')
  // YOUR CODE BELOW THIS LINE.
  document.querySelector('#message2').innerHTML = beyonceTweet.text
  //<a id="link2" href="#">Bynoce</a>
  document.querySelector('#link2').innerHTML = beyonceTweet.name
  //<span id="user2">@bynoce</span>
  document.querySelector('#user2').innerHTML = beyonceTweet.handle
}

const changeLinkAndImageAttributes = () => {
  console.log('changing link attribute')
  // YOUR CODE BELOW THIS LINE
  //Sets the href attribute for link1 to point to the first element in the links array
  document.querySelector('#link1').href = links[0]
  //Sets the href attribute for link2 to point to the second element in the links array
  document.querySelector('#link2').href = links[1]
  //Sets the src attribute for the beyonce image to point to the third element in the links array
  document.querySelector('#beyonce').src = links[2]
}

const changeClassAttribute = () => {
  console.log('changing class attribute')
  // YOUR CODE BELOW THIS LINE
  //Update the changeClassAttribute function so that it replaces the “tweet” class
  //with the “tweet-pink” class for the two tweets.
  document.querySelector('#tweet1').className = 'tweet-pink'
  document.querySelector('#tweet2').className = 'tweet-pink'

}

const appendElements = () => {
  console.log('appending element')
  // YOUR CODE BELOW THIS LINE
  //Goal: Add an "A" element to the bottom of tweet 1 that links to
  //our course website.
  //link tag: <a href="https://f17.ebook.mmart.us/">Intro to Javascript</a>
  document.querySelector('#tweet1').innerHTML += '<a href="https://f17.ebook.mmart.us/">Intro to Javascript</a>'

  //Goal: An "img" element (an image) that points to an image of your choice below tweet1
  //img tag: <img src="http://www.thrivingcanine.com/sites/default/files/field/image/dog_listening_0.jpg" alt="listening dog" style="width:auto;">
  document.querySelector('#tweet1').innerHTML += '<img src="http://www.thrivingcanine.com/sites/default/files/field/image/dog_listening_0.jpg" alt="listening dog" />'
}
