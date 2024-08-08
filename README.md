Assignment - String Challenges

Javascript uses the same coding foundations concepts as all other languages. In addition to completing the following in JavaScript consider solving some of the challenges in Python to notice the similarities and differences between the languages.

Write a program that checks if the input is a string.
Check your program using the following examples:

isString("abc") => true
isString(190) => false

Write a program that checks if a string is blank.
Check your program using the following examples:

isBlankString("") => true
isBlankString(" ") => true
isBlankString("fjfjf") => false

Write a program that capitalizes the first character of a string.
Check your program using the following examples:

capitalizeFirst("abcdef") = > "Abcdef"

Write a program that abbreviates a full name.
Check your program using the following examples:

abbr("Ryan Curtis") => "Ryan C."

Write a program that will truncate a sentence after a given amount of characters.
Check your program using the following examples:

truncate("I am a long sentence", 5) => "I am a..."

Use slice to return from the "g" all the way to the end of the following sentence:
const str="The practitioners grappled on the road side!"
Output: "grappled on the road side!"
Additional Practice: Refactor each program with a function.

Provide a link to a github repository or repl in the field below.

refactor comments:
All exercises are properly solved. Methods, conditional and loops are used to provide the desired result. Even a recursive function was used in the last challenge. Here are a few things to consider.

1. data structures with the declaration const can still have elements, key/values, etc. changed. Unless your code will change the data type of the data structure, it is best to declare with a const.

2. You use several for loops that properly perform the intended purpose. There are several loops in the code base that can use for of loops in their place. This will make the code more readable.

3. The alphabetical order challenge uses regular expression in its code base. Currently, there are many methods being used on the same line. To make sure your code explains itself, it can be best to split the methods into several lines. If a new variable is created, the variable name can help developers in the dev shop understand and work on the code.
