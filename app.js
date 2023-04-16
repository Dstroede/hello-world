let userName= prompt("What is your name?");
console.log("Hi "+ userName + ", lets get fit!");
document.write("Hi "+ userName + ", let's get fit!");


let userAnswer = prompt("How many years of experience do you have in the gym?");

if(userAnswer == 1){
    alert("We've got a solid start! Lets take it to the next level");
} else if(userAnswer < 1 ){
    alert("You're at the perfect place to get started!");
}else if(userAnswer > 2 ){
alert("Whoa! You must be a pro! Lets see if I cant teach you a thing or two!");
}
else if(userAnswer > 50 ){
    alert("Were you born in the gym? I'm not sure you are going to learn anything new here...");
}
