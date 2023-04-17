function allowEntrance(){
let webPassword = ("Y");
let userGo = prompt("This is only for humans...Are you human? (Y or N)");
console.log(userGo)
 if(userGo == webPassword){
 alert("Let's Get Started!");
 } while(userGo != webPassword){
userGo= prompt("No robots here! Unless... Are you at least half human?");
}
}
function collectName (){
let userName = prompt("What is your name?");
console.log(userName);
alert("You ready to get after it "+ userName + "?");
}
function collectXp (){
let userAnswer = prompt("How many yrs of exp do you have in the gym?");
console.log(userAnswer)
if(userAnswer == "1"){
alert("We've got a solid start! Lets take it to the next level");
} else if(userAnswer < "1" ){
alert("You're at the perfect place to get started!");
}else if(userAnswer > "2" ){
alert("Whoa! You must be a pro! Lets see if I cant teach you a thing or two!");
}
else if (userAnswer > "50" ){
    alert("Were you born in the gym? I'm not sure you are going to learn anything new here...");
}
}