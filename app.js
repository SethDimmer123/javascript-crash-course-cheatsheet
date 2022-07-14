// STRINGS DATA TYPE STARTS AT 7:00//
// console.log('hello world '+'4234##&*798789')     /*The space between the words "Hello" and "World" count as a string index and it currently the 5th string */
// console.log('Hello World'[10]) 
/*To select the index that i want put either 0,1,2,3,4  */
// console.log('12345'.length)
/*The length of an empty string is 0 example''*/
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

// let bool = '1' !== 1

// console.log(bool)

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

// let subscribed = false
// let loggedIn = true     
/*THIS ALL IS EXPLAINED AT 39:24*/

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

// let cash = 40
// let price = 40

// if(cash > price) {
    // console.log("you paid extra - here's your change")
// }
// else if (cash === price) {
    // console.log("you paid the exact amount, have a nice day!")
// }

// let cash = 30
// let price = 40          
/*41:20 */  /*THIS IS WHAT HAPPENS WHEN WE DO NOT HAVE ENOUGH CASH FOR THE PRODUCTS */

// if(cash > price) {      
    // console.log("you paid extra - here's your change")
// }
// else if (cash === price) {
    // console.log("you paid the exact amount, have a nice day!")
// }
// else {
    // console.log("not enough money - you still owe x dollars")
// }


/*43:21 */
// let cash = 100
// let price = 40                   
/*This is how you calculate the extra dollars change*/
// if(cash > price) {    
    // console.log(`you paid extra - here's ${cash - price} dollars change`)
// }
// else if (cash === price) {
    // console.log("you paid the exact amount, have a nice day!")
// }
// else {
    // console.log(`not enough money - you still owe ${price - cash} dollars`)
// }

/* 43:38 */

// let cash = 100
// let price = 200
// let difference = cash - price
/*Easier way to do what you did line 162 */
// if(cash > price) {      
    // console.log(`you paid extra - here's ${difference} change`)
// }
// else if (cash === price) {
    // console.log("you paid the exact amount, have a nice day!")
// }
// else {
    // console.log(`not enough money - you still owe ${difference * -1} dollars`)
// }

/*look at page 8 part 5 for above 43:43*/ 


/*THIS IS THE END OF if,else if, and else */

/*COMPARISON OPERTATORS REVIEW STARTS AT 44:38*/
/*COMPARING TWO values with each other*/

/* == equal values */
/* === equal values and types */
/* != not equal */
/* !== not equal value and equal type */

/*COMPARISON OPERATORS 44:48*/

/* > greater than */
/* < less than */
/* >= greater than or equal to */
/* <= less than or equal to */



/* LOGICAL OPERATORS STARTS AT 45:14 */
/*examples of logical operators */

// && and

// true && true
// true && false
// false && true
// false && false

/*Example of logical operator */
// let cash = 50
// let price = 40
// let isStoreOpen = true

// if(cash >= price && isStoreOpen === true) {
    // console.log('we have enough cash to buy the products')
    // console.log('print the receipt')
// }

// let cash = 50
// let price = 40
// let isStoreOpen = false

// if(cash >= price && isStoreOpen === true) {
    // console.log('print the receipt')
// }

/*ANOTHER EXAMPLE OF LOGICAL OPERATORS*/
/* What does the straight line do "||" */
/*|| checks if the left or right side of the comparison is true */

/*true || true--> true */
/*true || false--> true */
/*false || true--> true */
/*false || false--> false */

// let cash = 50
// let price = 40
// let isStoreOpen = false

// if(cash >= price || isStoreOpen === true) {
    // console.log('print the receipt')
// }

/*FALSY VALUES STARTS AT 50:02 */
/*A falsy value is considered as 'false' when converted to a boolean */
/* undefined
   null
   NaN -Not a Number
   0
   "" - string
   false
   /*if you convert these to a boolean it will give you false */

   /*Truthy Values STARTS AT 50:30 */
   /*10*/
   /*3.14*/

   /*"Frontend Simplfied" */
   /*"false" */             /*If the string is not empty it is a truthy value */
   /*"0" */

   /*TRUTHY VALUES START AT 50:30 */
    // A truthy value is considered as 'true' when converted to a boolean
        // STRINGS THAT ARE NOT EMPTY ARE CONSIDERED TRUTHY
//    EXAMPLES OF TRUTHY VALUES

        // 10
        // 3.14

        // "Frontend Simplified"
        // "false"
        // "0"

        // []
        // {}

        // let cash = 50
        // let price = 40
        // let isStoreOpen = false
        // for the if statement to run it just needs to be a truthy value
        // if("") {
            // console.log('print the receipt')
        // }
        // for the else starment to run the if condition needs to be a falsy value (put "" inside parentheses on the if conditional)
        // else{
            // console.log("falsy value")
        // }
        //if you use a falsy value the "if" statement will not run

        // 51:44 Shows a quick tip to check if a value is truthy or falsy

        // !!0 input this into the javascript console on inspect element for example
            // !!"0" this is true because it is a string

            // We are proving what is Above us 51:50

            // let val = "";
            // if(val) {
                // console.log("truthy value", !!val)
            // }
            // else{                           /*false */
                // console.log(!!val)
            // }
                    /*THIS IS ADVANCED JAVASCRIPT   52:30 */
            // let val = "seth";
            // if(val) {
                // console.log("truthy value", !!val)
            // }
            // else{                   /*true*/
                // console.log(!!val)
            // }

            // THIS IS THE START OF TERNARY OPERATORS 52:56
            // A shortcut for an if else condition
            // let hot = true

            // hot ? console.log('weather is hot outside') : console.log('weather is cold')
            // if hot was a false statement the it would be 'weather is cold'

            // let hot = false

            // hot ? console.log('weather is hot outside') : console.log('weather is cold')
            // falsey value means it is going to run the code on the right side of colon

            // ternary exercise 55:43(LOOK AT NOTES)

            // let cash = 50
            // let price = 40
            // let isStoreOpen = true

            // isStoreOpen ? console.log('give receipt') : console.log('do not give receipt')

            // let cash = 50
            // let price = 40
            // let isStoreOpen = false

            // isStoreOpen ? console.log('give receipt') : console.log('do not give receipt')

            // THESE ARE 2 DIFFERENT WAYS TO DO THE SOLVE THE SAME PROBLEM
            // LOOK AT 56:07

            // let str = cash>= price && isStoreOpen ?"give receipt" : "do not give receipt"
            // console.log(str);

            /*END OF CONDITIONALS 57:16 */

            // START OF LOOPS 57:30
            // What are loops used for?

            // Repeats the same code over and over again.

            // example of why we need to use loops is having and counting to 100 lines of code

            // DRY = Don't repeat yourself
            // let count = 1;
            // console.log(count)
            // count = count + 1
            // console.log(count)
            // count = count + 1
            // console.log(count)
            // count = count + 1
            // console.log(count)
            // count = count + 1
            // console.log(count)
            // all the way to 100
            // you use a loop when you are duplicating the same line of code

            //THERE ARE 3 TYPES OF LOOPS
            // THE DIFFERENCE BETWEEN THEM IS THEY HAVE DIFFERENT SYNTAX'S
            // 58:50
            // for loop
            // while loop
            // do while loop

            // The "while" is the same syntax as an "if" statement

            // INSIDE OF THE () AS LONG AS THE CONDITION 
            // IS TRUE IT WILL EXECUTE WHATEVER IS INSIDE OF THE "{}"
            
            
            //  IF YOU PUT TRUE INSIDE () IT WILL CRASH BROWSER
            // let count = 1;

            // while(false) {              
                // count = count + 1;
            // }

            // let count = 1;

            // while(count <= 100) {
                // console.log('this ran')
                // count = count + 1;
            // }

            // WHILE LOOP PROBLEM 1:00:56

            // let count = 1;

            // while (count <= 5) {
                // console.log('this ran')
                // count = count + 1;
            // }

            // WHILE LOOP SOLUTION 1:01:18
            // I WANT TO PRINT OUT EVERY SINGLE # FROM 
            // 1 TO 100 WITHOUT REPEATING
            
            // DRY- Don't repeat yourself
            // let count = 1;

            // while (count <=100) {
                // console.log(count)
                // count = count + 1;
            // }

            // NOW PRINTING OUT #'S 1 TO 100 USING A 
            // FOR LOOP INSTEAD OF WHILE LOOP
            // look at 1:04:29
            // look at notes as well

            // for (let i = 0; i < 100; ++i) {
                // console.log(i + 1);
            // }

            // PRACTICE QUESTION "for-loop" 1:05:24

            /**Write a for-loop that loops through 1 to 20
             * If the number is divisible by 3, print "Frontend"
             * If the number is divisible by 5, print "Simplified"
             * If the number is divisible by 3 and 5, print "Frontend Simplified"
             * If the number is *not* divisible by either 3 or 5, print the number
             * 
             *  @example
             * 1 -> 1 ---> 1 prints one
             * 2 -> 2
             * 3 -> "Frontend"
             * 4 -> 4
             * 5 -> "Simplified"
             * ...
             * 15 -> "Frontend Simplified"
             * ...
             * 20 -> "Simplified"
             */






            










































