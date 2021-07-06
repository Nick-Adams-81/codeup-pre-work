"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var nameResponse = prompt("what is your name?")
   
 if(nameResponse == "") {
    prompt("please enter your name")
} else {
    alert("Awesome, " +  nameResponse  + "! nice to meet you!")
}

// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
var likePizza = prompt("do you like pizza " + nameResponse + "?")

 if(likePizza == "yes") {
     alert("I like pizza too!")
 } else {
     alert("sorry you don\'t like pizza")
 }
