// STRINGS DATA TYPE STARTS AT 7:00//
// console.log('hello world '+'4234##&*798789')     /*The space between the words "Hello" and "World" count as a string index and it currently the 5th string */
console.log('Hello World'[10]) 
/*To select the index that i want put either 0,1,2,3,4  */
// console.log('12345'.length)
/*The length of an empty string is 0 example:''*/
/*15:05*/   /*let str = 'David'
            console.log(str[0])/*This is the same thing*/ 
// let str = 'David91'
// console.log(str[str.length - 1])

/*NUMBER DATA TYPE STARTS AT 16:49*/ 

/*BOOLEAN DATA TYPE STARTS AT 20:40*/ 

/*NULL AND UNDEFINED DATA TYPE STARTS AT 21:10*/

/*VARIABLES STARTS AT 24:37*/
/*Variable names need to be descriptive DO NOT USE X OR Y*/
let fullName = 'Seth Dimmer'/*string*/
let planet = 'Earth'
let temperature = 20/*number */
let isRaining = true/*boolean*/ 
"const isRaining = true"
"const temperture = 30"

/*VARIABLE QUESTIONAIRE AT INTERVAL 31:00*/

/*
* Converting Tempertures
*
* Celsius-to-Fahrenheit formula:
*   F = C x 1.8 + 32
*/  

/*fill in blank */
    /* F = 10 x 1.8 + 32 

// let celsius = 10;
// let fahrenheit = celsius * 1.8 + 32

// console.log(fahrenheit)
/*The answer is 50*/

/* "EQUALITY" VARIABLE STARTS AT 32:49 */
// let bool = '1' == 1

// console.log(bool)

// let bool = '1' === 1

// console.log(bool)

// let bool = '1' != 1 /* FALSE*/
/*This checks if both of the values are not equal to each other*/

// console.log(bool)

// /*The opposite of what is above is going to be TRUE */

let bool = '1' !== 1

console.log(bool)

/*the opposite of FALSE is TRUE */
// let bool = !false 

// console.log(bool)


/*the opposite of TRUE is FALSE */

/*let bool = !true*/

/*console.log(bool)*/

/*THIS MARKS THE END OF DATA TYPES & VARIABLES SECTION*/

/*THIS IS THE START OF CONDITIONALS */

// let subscribed = true

// if(subscribed === true) {
    // console.log('show the video')        /*you can have an "if" statement without an "else statement" but it cannot be the other way around 37:46 */
// }
// else{
    // console.log('tell user to log into account')
// }

let subscribed = false
let loggedIn = true     /*THIS ALL IS EXPLAINED AT 39:24*/

// console.log('show the video')   /*39:24*/
// if(subscribed === true) {        
    /*If this condition is "false" then the "else if" runs and it FORGETS THE "else" STATEMENT */  
  /*If this condition is "true" then it will only run this "if" statement and forgets the "else" and "else if" statements */
//  }
//  else if(loggedIn === true) {
    // console.log('tell the user to upgrade their subscription') 
    /*you CANNOT run an "if" and an "else if" IF THE "if" statement runs then the "else if" statement CANNOT run */
//  }
//  else{
    //  console.log('tell user to log into account') 
//  }
 /*the "else" variable runs when they are not subscribed */

 
 
 /*Another example of this is down below (40:02) */

//  let cash = 50
//  let price = 40

//  if(cash > price) {
    // console.log("you paid extra - here's your change")
//  }

let cash = 40
let price = 40

if(cash > price) {
    console.log("you paid extra - here's your change")
}
else if (cash === price) {
    console.log("you paid the exact amount, have a nice day!")
}



























