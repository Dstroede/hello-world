function findName(){
let userName = prompt("What is your name?");
console.log ("Hi "+ userName + ", lets get fit!");
document.write ("Hi "+ userName + ", let's get fit!");
}

function findExperience(){
let userAnswer = prompt("How many years of experience do you have in the gym?");
if(userAnswer == 1){
    alert ("We've got a solid start! Lets take it to the next level");
} else if(userAnswer < 1 ){
    alert ("You're at the perfect place to get started!");
}else if(userAnswer > 2 ){
alert ("Whoa! You must be a pro! Lets see if I cant teach you a thing or two!");
}
else if (userAnswer > 50 ){
    alert ("Were you born in the gym? I'm not sure you are going to learn anything new here...");
}
}

function findEntrance(){
    let userGo = prompt("This content is only for humans...Are you human? (Y or N");
    if(userGo = Y){
        alert ("Let's take a look");
    } else if(userGo != Y){
        alert ("Hello, robot. I suppose I can still show you my website.");
    }
}