
function sum (a, b){
    return a + b

}
const results = sum(10, 12)
console.log(results)



function division (a, b) {
    return a /b
}

const value = division(10, 2)
console.log(value)




function isEven(number) {
    return number % 2 === 0;
  }
  
  const num = 11;
  
  if (isEven(num)) {
    console.log(`${num} is even.`);
  } else {
    console.log(`${num} is odd.`);
  }


  function division(a, b) {
    return a/b

  }

  const diValue = division(10,3)
  console.log(diValue)

//   //===================================================================

function greet (name,age){
  console.log(`My name is ${name} and I'm ${age} years old`)
}
greet('Simon Mungai', 24);

//=====================================================================

function greet2 (name) {
  console.log(`Hello ${name}`)
}

if (!name){
  console.log('Hi there')
}

//=====================================================================

function convertToFahrenheit(celcius){
const Fahrenheit = (celcius * 9 / 5) + 32
return Fahrenheit
}

const totalFahrenheit = convertToFahrenheit(15)
console.log(totalFahrenheit)

//========================================================================

function convertToCelcius(fahrenheit) {
  const Celcius = (fahrenheit - 32) * 5 /9
  return Celcius
}

const totalCelcius = convertToCelcius(59)
console.log(totalCelcius);

//=========================================================================

function calculateBMI (weightKg, heightM){
  const BMI = weightKg / heightM **2

}

const totalBMI = calculateBMI(105, 1.8)

if (totalBMI >= 30){
  console.log("You are overweight");

} else if (totalBMI >= 20 && totalBMI < 30){
  console.log("Normal Weight");

} else{
  console.log("You are underweight")
}

//==========================================================================

function convertLength(length, from, to) {
  const miles = 1.6
  return (miles * length) +`${to}` 
}

const lengthValue = convertLength(40, 'miles' , 'km')
console.log(lengthValue)

//=================================================

function morning (){
  document.write('Good Morning ')
}



let drivingAge = window.prompt();

if (drivingAge< 0)
{
  morning()
  document.write('Invalid input. Try again')
}
else if (drivingAge > 0 && drivingAge < 18)
{
  morning()
  document.write('You are under age')
}

else if (drivingAge >= 18 && drivingAge < 76)
{
  morning()
  document.write('You are legible to drive')
}

else 
{
  morning()
  document.write('You are too old to drive')
}

//======================================================================================
 function goodEvening ()
 {
  let userName = window.prompt(`What's your name?`)
  return `Good Evening, ${userName}`
 }
let greetings = goodEvening()
document.write(greetings)

//=======================================================================================

function sum (num1, num2)
{
  let addition = num1 + num2
  return addition
}

const Results = sum(1,20)
document.write(Results)

//========================================================================================

function squareNumber (x)
{
  let square = x **2
  return square
}

let squareResults = squareNumber(16)
console.log(squareResults)

//=========================================================================================================================
/* Write a function named tellFortune that:
      ° takes 4 arguments: number of children, partner's name, geographic location, job title.
      ° outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
      ° Call that function 3 times with 3 different values for the arguments.*/

function tellFortune (jobTitle, location, partnerName, numberOfChildren)
{
  console.log(`I will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberOfChildren} children`)
}

tellFortune('Farmer', 'Arizona', 'Rebecca', 3)
tellFortune('Software Engineer', 'Nairobi', 'Mary', 2)
tellFortune('Doctor', 'Australia', 'Sophie', 2)

//===========================================================================================================================

/*Write a function named calculateDogAge that:
     ° takes 1 argument: your puppy's age.
     ° calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
     ° outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
     ° Call the function three times with different sets of values.
     ° Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years. */


function calculateDogAge (humanYears, conversionRate = 7)
{
  dogYears = humanYears * conversionRate;
  console.log(`Your doggie is ${dogYears} years old in dog years!`)
}

calculateDogAge(7)
calculateDogAge(3, 6)
calculateDogAge(7, 5)

//================================================================================================================================

/* 
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

  - Write a function named calculateSupply that:
      ° takes 2 arguments: age, amount per day.
      ° calculates the amount consumed for rest of the life (based on a constant max age).
      ° outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
  - Call that function three times, passing in different values each time.
  - Bonus: Accept floating point values for amount per day, and round the result to a round number.*/

 function calculateSupply (age, dailyGramsAmount)
 {
  let maxAge = 100;
  let snacksToBeConsumed = ((maxAge - age) * 365 ) * dailyGramsAmount
  let message = `You will need ${snacksToBeConsumed} grams of Lunchbar chocolate to last you until the ripe old age of ${maxAge}.`
  
  console.log(message)
 }

 calculateSupply(31,60)
 calculateSupply(21,150)
 calculateSupply(16,80)

// ==================================================================================================================================

