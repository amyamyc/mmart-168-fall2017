# HOMEWORK 5: MANIPULATING TWITTER DATA WITH FUNCTIONS
> * Due date: Midnight on Wednesday, 10/4 (1 week)
> * Part I: Using Github like the cool kids we are
> * Part II: Homework
> * To submit: See Part II, Step 4

## Preamble
This homework will require some googling. As a software engineer, a lot of what you'll need to do is express what you're TRYING to do, and then read code and documentation in order to achieve it. Remember: StackOverflow and Mozilla Developer Network (MDN) are your friend!

## Part I: Setting Up Your GitHub
1. Using the Terminal, navigate to your git repository: `$ cd /path/to/mmart-168-fall2017`
2. Check out the master branch: `$ git checkout master`
3. Pull the most recent changes from the upstream repository: `$ git pull --rebase upstream master`
4. Create a new branch to do Homework 5: `$ git branch homework05`
5. Checkout your new branch: `$ git checkout homework05`
6. Verify that you are now on the new branch: `$ git branch` (check that your new branch has an asterik next to it).

## PART II: Reading response
Edit README.MD and write your reading response here!

Building a Design System for Healthcare.gov
Article: https://blog.navapbc.com/building-a-design-system-for-healthcare-gov-20dc1a833ab3
Open Source Tool:
https://design.cms.gov/

I wanted to challenge myself this week and reflect on an article that used more Javascript language. This article speaks about the technical decisions made for the development of Healthcare.gov which is the federal website for the U.S. healthcare exchange. The author breaks down these technical decisions into the following categories: Architecture, Documentation, Developer Workflow, Distribution, and Versioning. These decisions would then contribute to a clean, intuitive, readable “template” that other developers (especially in the government service context) can use and scale. The open source tool can be seen here. I thought the tool was particularly interesting because I imagine the web experience for a federal healthcare website will be used by a number of different people varying in socioeconomic status, computer skills, ethnicity, culture etc. I am curious as to how the author’s technical decisions relates to creating a design that is accessible by all of its users.

In the Developer Workflow portion of the open source tool, the author encourages the use of a combination of Browsersync and Webpack’s Hot Module Replacement. These tools will allow users to arrange the code editor right next to browser and allow live browser reloading. These tools will also create documentation files as users makes changes to the code. These tools remind me of JSlint (JS Linter? Is that right?) that we downloaded in Atom during class. This tool improves my workflow by detecting errors in my code. However, I’m curious to know how I bring Browsersync and Webpack to my disposal. Where do I begin to download it? Is it forked on github and then connected to Atom so I can interact with the programs on my own computer?


## Part III: JavaScript Homework

### Step 1: Reverse a tweet
> Open the following 2 files in Atom:
>  
>  * hw05/part1.html
>  * hw05/scripts/part1.js

Complete the following 2 tasks:

1. Write a function called "reverseText" that takes a single string as an input. It should return that string with all characters reversed (`e.g., "Hello, world" will return "dlrow ,olleH"`).You can test this in the browser by updating the forEach function to reverse every tweet's text
> HINT: This is a common interview question to screen out javascript devs who don't understand the language's native functions. Google around - you might find a good solution for this problem.

Once you've written your reverse text function, write a comment describing how it works.

2. Now, write a function called "reverseTweet" that takes a single string as an input. If the string contains a hashtag (#), it should return the string. If it doesn't contain a hashtag, it should return the string with all characters reversed. Update the forEach function so that it reverses tweets that don't have hashtags
> HINT: Strings have a useful function called [indexOf]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)) that you may find useful
> HINT: You already have a reverseText function laying around...

### Step 2: Filtering Data
> Open the following 2 files in Atom:
>  
>  * hw05/part2.html
>  * hw05/scripts/part2.js

Complete the following task:

1. Create a new variable called tweetsWithHashtags
2. Call the "filter" function on the json.statuses array. The filter function returns an array, so you can assign the resulting array to the `tweetsWithHashtags` variable. Read more about filter here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
3. Write an anonymous function that checks each tweet's text, and filters out tweets that do NOT have hashtags.
4. Update the forEach function so that it runs on the new tweetsWithHashtags array

### Step 3: Submit Your Homework via GitHub + Moodle
This week, you're going to submit your homework using GitHub. To do so:

1. Just as in Step three, open your Terminal and type: `$ git status`. It should tell you which file you've changed.
2. To "commit" all of your changes, type: ` $ git commit -am 'Homework 5 updates'`
3. To "push" your change to up to your github account, type: `$ git push`
4. Finally, verify that your changes are up on GitHub by logging into your GitHub account and taking a look.
5. **Submit your homework by pasting a link to your branch into the Moodle.**
