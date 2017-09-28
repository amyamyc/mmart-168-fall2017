// Amy Chew

let language = 'English'
let languageCode = 'en'
let jsonData


const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'ru') {
        language = 'Russian'
    } else if (code === 'es') {
        language = 'Spanish'
    } else {
        language = 'English'
    }
    document.getElementById('language').innerHTML = language

    //clear form:
    getData()
}

const clearData = () => {
    const element = document.getElementById("results")
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

//Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp

// value of the Id named "term"
const getData = () => {

    const term = document.getElementById('term').value
    const baseURL = 'https://mmart168-twitter-proxy.herokuapp.com/1.1/search/tweets.json?q=' + term
    twitterURL = baseURL + '&lang=' + languageCode
    fetch(twitterURL)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            let div
            let textNode
            let status
            // Amy's Note: created 3 variables div, textNode and status

            // output statuses:
            console.log(json.statuses)

            // clear out existing tweets:
            clearData()

            // output the text of the first tweet:
            status = json.statuses[0] // Amy's note: changed status variable to the first json.statuses
            div = document.createElement("div") // Amy's note: What does this mean? This is a div variable.
            div.className = "tweet" // Amy's note: We are giving the div a class name "tweet"?
            textNode = document.createTextNode(status.text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)

            // output the text of the second tweet:
            status = json.statuses[1]
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(status.text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)

            // 1. Describe what you think this code is doing.
            //   Amy's Note: The getData function is returning the tweets that have
            //   the search terms we have inputted.

            // 2. output the text of the third tweet:
            status = json.statuses[2]
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(status.text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)

            // 3. output the text of the fourth tweet:
            status = json.statuses[3]
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(status.text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)

            // 4. output the text of the fifth tweet:
            status = json.statuses[4]
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(status.text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)

            // 5. comment the code above, starting from after the clearData,
            //    and ending right before this comment. Then, un-comment the
            //    code below:
            //    Amy's Note: The code below will return ALL tweets that contain
            //    the search term(s) inputted. The code above was more specific
            //    and returning only the first, second, third, fourth
            //    fifth tweet results.

            // json.statuses.forEach(function (status) {
            //     div = document.createElement("div")
            //     div.className = "tweet"
            //     textNode = document.createTextNode(status.text)
            //     div.appendChild(textNode)
            //     document.getElementById("results").appendChild(div)
            // })

        })
};
