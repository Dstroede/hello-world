let userGo = prompt("This is only for humans...Are you human? (Y or N");
console.log(userGo)
 if(userGo === "Y"){
 alert("Let's take a look");
 } else if(userGo == "N"){
alert("Hello, robot. I suppose I can still show you my website.");
}
let userName = prompt("What is your name?");
console.log(userName);
alert("You ready to get after it "+ userName + "?");
let userAnswer = prompt("How many yrs of exp do you have in the gym?");
console.log(userAnswer)
if(userAnswer === "1"){
alert("We've got a solid start! Lets take it to the next level");
} else if(userAnswer < "1" ){
alert("You're at the perfect place to get started!");
}else if(userAnswer > "2" ){
alert("Whoa! You must be a pro! Lets see if I cant teach you a thing or two!");
}
else if (userAnswer > "50" ){
    alert("Were you born in the gym? I'm not sure you are going to learn anything new here...");
}