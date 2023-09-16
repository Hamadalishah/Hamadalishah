// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?
var userName:string = "Hello Hassan";
console.log(userName,", would you like to learn some Python today?");
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName:string = "Syed Abdullah Shah"
console.log("Name in lower case ",personName.toLowerCase());
console.log("Name in uper case  ",personName.toUpperCase());

// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
let famousQuote:string = `"Try to gain knowledge about everything to the maximum possible of your strength."`;
console.log("Imam Hazrat Ali Sying :",famousQuote);

//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let personName2:string = "Albert Einstien"
console.log(personName2,`Once Said '“A person who never made a mistake never tried anything new.” `);

//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var strpName:string = "\tHamad\n\tAli\n"
console.log(`name with whit space: ${strpName}`);

//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

console.log(6+2);
console.log(10-2);
console.log(4*2);
console.log(16/2);
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var numb:number = 786;
var sms:string = "its my favourite number"
console.log(sms, "", numb);
//this program for favourite number store on a var and console output is its my favourite number:786

//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//Q no 10
//this question related to comment so ihave comment on above q,

//Q no 11
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var friendNames: string[] = ["Sheraaz", "Sohail", "Syed safeer Naqvi", "Syed Hassan", "Malik Hanan"];
console.log(friendNames);

for (let i = 0; i < friendNames.length; i++) {
    console.log(friendNames[i]);
    
}

//Q12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name
var frindNames: string[] = ["Sheraaz", "Sohail", "Syed safeer Naqvi", "Syed Hassan", "Malik Hanan"];
console.log(friendNames);

for (let i = 0; i < frindNames.length; i++) {
    console.log(frindNames[i] ,"Hello Who Are you")
};

//Q no 13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let cars:string[] = ["toyota corolla","honda city","hondai"];
for (let I = 0; I < cars.length; I++) {
    const element = cars[I];
    if (element==="toyota corolla") {
        console.log(element ,":i like toyota corolla");
        
    }
    if (element==="honda city") {
        console.log(element, "its my favourite car");
        
    }
    else if (element==="hondai") {
        console.log(element,"best perfromance of this car");
    }
}
//Q no 14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//Q no 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.





//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list



var people:string[]= ["ahad mir","faizan ahmad","muzamall"]
for (let index = 0; index < people.length; index++) {
    const element = people[index];
  
    console.log(element,    "'i invite you on dinner at 7pm today. please accept my invitation' ");
    
}
console.log("after q 14");

//Q 15
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
console.log(`${people[2]}is not available`);
people.splice(people.indexOf("muzamall"),1,"ali")
//• Print a second set of invitation messages, one for each person who is still in your list.
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element,    "'i invite you on dinner at 7pm today. please accept my invitation' ");
    
}
console.log("after q 15 ");
//Q 16
//• Add one new guest to the beginning of your array.
people.unshift("hussain")
//• Add one new guest to the middle of your array. 
people.splice(people.length/2,0,"abdullah")
//• Use append() to add one new guest to the end of your list.
people.push("adnan")
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element,    "'i invite you on dinner at 7pm today. please accept my invitation' ");
}
//Q17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//\Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print 
 //a message to that person letting them know you’re sorry you can’t invite them to dinner. 
  //Print a message to each of the two people still on your list, letting them know they’re still invited.
  //Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end 
 //of your program.

 while (people.length>2) {
    let removelist = people.pop()
    console.log("sorry",removelist,"i will not invite you on my dinner");
}
people.pop();
people.pop();
console.log(people);
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.


// • Show that your array is still in its original order by printing it.




// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

var places: string[] = ["Makka", "madina", "nNw york", "Haungkaung", "Islamabad"];
console.log(places);

// • Print your array in alphabetical order without modifying the actual list.
var alphabetical_order: string[] = [...places].sort();
console.log("alphabetical_order", alphabetical_order);

// • Print your array in reverse alphabetical order without changing the order of the original list.
var reverseOrder: string[] = [...places].reverse();
console.log("reverseOrder", reverseOrder);

// • Show that your array is still in its original order by printing it again.[]
console.log("original arreay", places);

// • Reverse the order of your list. Print the array to show that its order has changed.
var reverseOrder: string[] = [...places].reverse();
console.log("reverseOrder", reverseOrder);
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number 
// of people you are inviting to dinner. 
var guestNames:string[] = ["adnan","muzamil","hassan","ahad"]
console.log(guestNames);
//20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything 
 //else you’d like. Write a program that creates a list containing these items.

let locatione:string[] =["k-2","europ","Naran Kaghan"]
console.log(locatione);

// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items. 
var car = {
    company:"Honda city",
    model: 2023,
    condition:"new",
    color:"black",
    plateNo:"LEH1230",
    
}
console.log(car);
// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs 
 //to produce an index error. Make sure you correct the error before closing the program.
let arrarList:string[] = ["computer","Laptop","Mobile","VCR","Digital Watch"]
console.log(` false index is ${arrarList[7]}`);
    console.log(` true index is ${arrarList[1]}`);
// 23. Conditional Tests: Write a series of conditional tests. Print a statement 
// describing each test and your prediction for the results of each test. Your code 
 //should look something like this: 
  
 //let car = 'subaru'; 
  
 //console.log("Is car == 'subaru'? I predict True.") 
  
 //console.log(car == 'subaru') 
  
 //• Look closely at your results, and make sure you understand why each line evaluates to True or False. 
  
 //• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. 
let carName:string = "mehran"
console.log(carName=="mehran");
console.log(carName!="mehran")
let nam:string = "Abdullah";
console.log(nam=="abdullah");
console.log(nam!="abdullah");
let girlName:string = "anaya"
console.log(girlName=="anaya");
console.log(girlName!="anaya");
let thingname:string = 'scale'
console.log(thingname=="scale");
console.log(thingname!="scale");
let month:string = "june"
console.log(month=="june");
console.log(month!="june");

// **24**. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
let numbr="874"
console.log(numbr=="874");
console.log(numbr=="875");

// • Tests using the lower case function
let myname="Danish"
console.log(myname=="danish");
console.log(myname=="Danish");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let n1:number=7
let n2:number=8
console.log(n1>=n2);
console.log(n1<=n2);
console.log(n1<n2);
console.log(n1>n2);


// • Tests using "and" and "or" operators
let n3:number=6
let n4:number=9
console.log(n3>n4==n4<n3);
console.log(n3<n4!=n3>n4);

// • Test whether an item is in a array
let listof:number[]=[1,3,5,7,9,11,13,15]
console.log(listof[4]==9);
//25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a 
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'. 
let Alien_color:string[]=["red","grey","blue"]
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)
for (let index = 0; index < Alien_color.length; index++) {
    const element = Alien_color[index];
    if (Alien_color[index]=="blue") {
    console.log(`play `);
}
else{
        console.log(`invalid input`);

    }
}

// **26**. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

Alien_color.filter((clor) => {
    if (clor == "red") {
        console.log(`player just earned 5 points`);
    }
    else {
        console.log(`player just earned 10 points`);
    }
})
// **27**. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
Alien_color.filter((clor) => {
    if (clor == "grey") {
        console.log(`player  will earned 5 points`);
    }
    else if(clor=="blue") {
        console.log(`player will earned 10 points`);
    }
    else if(clor=="red") {
        console.log(`player just earned 15 points`);
    }
    else  {
        console.log(`invalid input`);
    }
})
/*28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then: 
  
 • If the person is less than 2 years old, print a message that the person is a baby. 
  
 • If the person is at least 2 years old but less than 4, print a message that the person is a toddler. 
  
 • If the person is at least 4 years old but less than 13, print a message that the person is a kid. 
  
 • If the person is at least 13 years old but less than 20, print a message that the person is a teenager. 
  
 • If the person is at least 20 years old but less than 65, print a message that the person is an adult. 
  
 • If the person is age 65 or older, print a message that the person is an elde
 
*/
let ageOfPerson:number = 35
if (ageOfPerson<2) {
    console.log("person is baby");
    
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
if (ageOfPerson>=2&&ageOfPerson<=4 ){
    console.log("person is toddler");
    
}

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
if (ageOfPerson>=4&&ageOfPerson<13) {
    console.log("person is Kid");
    
}

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
if (ageOfPerson>=13&&ageOfPerson<=20) {
    console.log("person is teenager");
    
}

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
if (ageOfPerson>=20&&ageOfPerson<=65) {
    console.log("person is adult");
    
}

// • If the person is age 65 or older, print a message that the person is an elder.
if (ageOfPerson>65) {
    console.log("person is elder");
    
}
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var fruits_array: string[] = ["apple", "orange", "bannana", "mango",]
for (let i = 0; i < fruits_array.length; i++) {
    if (fruits_array[i] == "bannana") {
        console.log("i realy like", fruits_array[i], "!");

    }

}
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.    

var usernames: string[] = ["awaise", "shan", "hamza", "asad", "usama"]
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "usama") {
        console.log("Hello admin, would you like to see a status report");

    }
    else if (usernames[i] != "usama") {
        console.log("hello", usernames[i], "thank you for logging in again.");

    }
}

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!
if (usernames == null) {
    console.log("we need to find users");

}
console.log(usernames);


