console.log("\n\n=================== COMPARISON ===================\n\n")

// Comparison Operators in JavaScript

// Part 1 - Equality
var currentTemperature = 22;
var desiredTemperature = 22;

// Check if "currentTemperature" is equal to "desiredTemperature"
var isEqual = currentTemperature == desiredTemperature
console.log("Is the current temperature equal to the desired temperature?", isEqual); //DO NOT MODIFY THIS LINE

//========================================================================================

// Part 2 - Strict Equality
var stringNumber = '25';
var actualNumber = 25;

// Check if "stringNumber" is strictly equal to "actualNumber"
var isStrictlyEqual = stringNumber === actualNumber
console.log("Is the type and value of stringNumber strictly equal to actualNumber?", isStrictlyEqual); //DO NOT MODIFY THIS LINE

//========================================================================================

// Part 3 - Inequality
var availableSeats = 8;
var requestedSeats = 5;

// Check if "availableSeats" is not equal to "requestedSeats"
var isNotEqual = availableSeats != requestedSeats
console.log("Are the available seats not equal to the requested seats?", isNotEqual); //DO NOT MODIFY THIS LINE

//========================================================================================

// Part 4 - Strict Inequality
var dayOfWeek = '7';
var dayNumber = 7;

// Check if "dayOfWeek" is not strictly equal to "dayNumber"
var isStrictlyNotEqual = dayOfWeek !== dayNumber
console.log("Is the day of the week not strictly equal (in type and value) to day number?", isStrictlyNotEqual); //DO NOT MODIFY THIS LINE

//========================================================================================

// Part 5 - Greater Than
var earnedPoints = 150;
var pointsForNextLevel = 300;

// Check if "earnedPoints" is greater than "pointsForNextLevel"
var isGreaterThan = earnedPoints > pointsForNextLevel
console.log("Has the player earned more points than needed for the next level?", isGreaterThan); //DO NOT MODIFY THIS LINE

//========================================================================================

// Part 6 - Greater Than or Equal
var currentBalance = 500;
var minimumBalanceRequired = 500;

// Check if "currentBalance" is greater than or equal to "minimumBalanceRequired"
var isGreaterOrEqual = currentBalance >= minimumBalanceRequired
console.log("Is the current balance greater than or equal to the minimum balance required?", isGreaterOrEqual); //DO NOT MODIFY THIS LINE

//========================================================================================

// Part 7 - Less Than
var age = 18;
var legalDrinkingAge = 21;

// Check if "age" is less than "legalDrinkingAge"
var isLessThan = age < legalDrinkingAge
console.log("Is the person's age less than the legal drinking age?", isLessThan); //DO NOT MODIFY THIS LINE

//========================================================================================

// Part 8 - Less Than or Equal
var teamAScore = 75;
var teamBScore = 80;

// Check if "teamAScore" is less than or equal to "teamBScore"
var isLessThanOrEqual = teamAScore <= teamBScore
console.log("Is Team A's score less than or equal to Team B's score?", isLessThanOrEqual); //DO NOT MODIFY THIS LINE
