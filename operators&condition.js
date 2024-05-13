let num =prompt("Enter a number");
if(num%5===0){
    console.log(num,"multiple is 5");
}
else{
    console.log(num,"multiple is not 5");
}
//checking the grade//
let num = prompt("Enter your score");
if(num>=80&&num<=100){
    console.log(num,"Grade is A");
}
else if(num>=70&&num<=89){
    console.log(num,"Grade is B");
}
else if(num>=60&&num<=69){
    console.log(num,"Grade is C");
}
else if(num>=50&&num<=59){
    console.log(num,"Grade is D");
}
else{
    console.log(num,"Grade is F");
}
