let webPassword = ("Y");
let userGo = prompt("This is only for humans...Are you human? (Y or N)");
console.log(userGo)
 if(userGo == webPassword){
 alert("Let's Get Started!");
 } while(userGo != webPassword){
userGo= prompt("No robots here! Unless... Are you at least half human?");
}
let userName = prompt("What is your name?");
console.log(userName);
alert("You ready to get after it "+ userName + "?");

let userAnswer = prompt("How many yrs of exp do you have in the gym?");
console.log(userAnswer)
if(userAnswer == 1){
alert("We've got a solid start! Lets take it to the next level");
} else if(userAnswer < 1 ){
alert("You're at the perfect place to get started!");
}else if(userAnswer > 2 ){
alert("Whoa! You must be a pro! Lets see if I cant teach you a thing or two!");
}
else if (userAnswer > 15 ){
    alert("Were you born in the gym? I'm not sure you are going to learn anything new here...");
}
function webRanker (){
  let userNum = prompt ("How many star would you give these prompts?");
  while (userNum < 1 || userNum > 5) {
    userNum = prompt ("Please pick a number between 1-5");
  }
  for(let i = 0; i < userNum; i++){
    document.write("<img src='Star.png' alt='star ratings'/>");
  }
}