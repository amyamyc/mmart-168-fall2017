// Amy Chew

let language // Amy's Note: let allows language and languageCode to be redefined
let languageCode

const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    // Amy's Note: setLanguage is a javascript function that will run with the onClick command.

    languageCode = code
    if (code === 'zh-Hans') {
        language = 'Chinese'
        //Amy's Note: if variable code is equal === to string 'zh-Hans' then language will appear as Chinese.
        //Amy's Note: If above is true, then all else below will not occur.
    } else if (code === 'fj') {
        language = 'Fijian'
    } else {
        language = 'Finnish'
    }
    document.getElementById('language').innerHTML = language
}
