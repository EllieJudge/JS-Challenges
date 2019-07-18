// JavaScript Challenges
// 6. JS Loops
// - Challenge 1:
//   If we list all the natural numbers below 10 that are multiples of 3 or 5, 
//   we get 3, 5, 6 and 9. The sum of these multiples is 23.
//   Find the sum of all the multiples of 3 or 5 below 1000.


// function isItAMultiple(num) {
// if (num % 3 == 0 || num % 5 == 0) {
//     console.log("Its a multiple of 3 or 5")
// }
// else {
//     console.log("Not a multiple")
// }
// }
// isItAMultiple(11)

// function multiples(number) {
//     // let sum = 0;
//     for(let i = 0; i <= number; i++){
//         if(i % 3 == 0 || i % 5 == 0) {
//             return number[i];
//         }
//     }
//     // return sum
// }
// console.log(multiples(5))
// console.log(multiples(10))
// console.log(multiples(12))

//I FUCKING DID IT!!!!!! YESSSSS!!!!!!!!!!!!!!
let sum = [];
function multy(num){
for(let i = 0; i < num; i++){
  if(i%3 === 0 || i%5 === 0){
   sum.push(i);
  }
}
return sum
}
console.log(multy(100));

// - Challenge 2:
//Take this string “jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhg
//tyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh”.
//The word “hi” appears multiple times. Find the first and 
//last occurrence of the word hi and log them to the console.

let string = "fiahgofhgoahifajgfphi"
let search1 = string.search("hi") //11 (first)
console.log(search1)

let string2 = "fiahgofhgoahifajgfphi"
let search2 = string2.lastIndexOf("hi") //19 (last)
console.log(search2)

// - Challenge 3:
//   Take the string from problem 2 and print each letter out individually.

let string3 = "fdsoaghrfoihgoirfhgr"
let split = string3.split("")
console.log(split)

// - Challenge 4:
//   Take the string from problem 2, loop through the string and find out how many 
// times the word hi appears and the indexes where it appears.

let string4 = 'superhilonghistringhi'

for (i = 0; i < string4.length; i++) {
    //console.log(string4[i])
    experi = string4[i] //saves string printed out as an array in var experi
    console.log(experi) //logs it
    console.log(experi.search("hi")) //searches it for hi except its split up so...
}


// - Challenge 5:

//   Create a function that checks if a number is a palindrome.

//   Use this function to find the biggest palindrome less than 90283743503594.


// - Challenge 6:

//   This is a paragraph from Harry Potter “Non-magic people (more commonly known as Muggles) were particularly afraid of magic in medieval times, but not very good at recognizing it. On the rare occasion that they did catch a real witch or wizard, burning had no effect whatsoever. The witch or wizard would perform a basic Flame Freezing Charm and then pretend to shriek with pain while enjoying a gentle, tickling sensation. Indeed, Wendelin the Weird enjoyed being burned so much that she allowed herself to be caught no less than forty seven times in various disguises.”

//   Count how many words are in this paragraph (using code!).


// - Challenge 7:

//   If I add up the digits of the number 19082 I would get 1+9+0+8+2=20. Add the digits of the number:

  
