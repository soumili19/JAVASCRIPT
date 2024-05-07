print all even number from 0 to 100//
for(let i =0;i<=100;i++)
{
    if(i%2==0)
    console.log(i)
}
//guess number game//
let gameNum=25;
let userNum=promt("Guess the game number : ");
while(gamenum!=userNum){
    userNum=prompt("You enterde wrong number!! guess the right number");
}
console.log("cingrtulations,you enterd right number");
