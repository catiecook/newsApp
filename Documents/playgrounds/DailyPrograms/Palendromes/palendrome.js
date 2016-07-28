//make a program that takes a string in and checks if it is a palendrome

var palendrome = function(str){
  var string = str.toLowerCase().replace(/\W/g, ''); //makes everthing lowercase and removes commas
  console.log(string);


  var stringArray = string.split(''); //makes an array out of the string
  var reverseString = stringArray.reverse().join(''); //reverses the string array and puts it back into a string

  if (string === reverseString){
    return (str + " is a palendrome")
  }
  else { return (str + " is not a palendrome")}
};
//user enters a string
var isPal = prompt("Please enter a sentence, and we will check it if is a palendrome")
console.log(palendrome(isPal));
