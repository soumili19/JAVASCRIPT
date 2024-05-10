let sum=0;
for(let i=1;i<=5;i++)
{
  sum=sum+i;
}
console.log("Sum = ",sum);
console.log("loop has ended");
for(let i=0;i<=5;i++)
{
  console.log("i = ",i)
}
//infinte loop//
for(let i=1;i>=0;i++)
{
 console.log("i =",i);
}
//do loop//
while(i<=5)
{
  console.log("i =",i);
  i++;
}
//do while loop//
do{
  console.log("i=",i);
  i++;
}while(i<=5);
//for-of-loop//
let str="javascript"
for(let i of strVar)
{
  console.log("i=",i);
  size++;
}
//for-in-loop//
console.log("string size =",size);
let student={
  name:"Soumili Dey",
  age:20,
  cgpa:7.5,
  isPass:true,
};
for(let key in student){
 // console.log("i =",i);
  //console.log("key =",key,"value",student[key]);
//}


