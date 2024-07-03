//average of the marks//
let marks=[85,97,44,37,76,60];
let sum=0;
for(let val of marks){
     sum += val;
    
}
let avg=sum/marks.length
console.log(`avg marks of the class = ${avg}`);
// final price after 10% off//
let items=[250,645,300,900,50];
let i=0;
for(let val of items){
    let offer=val/10;
   items[i]=items[i]-offer;
   console.log(`value oafter offer= ${items[i]}`);
   i++;
}
//create company add do arry in js method//

let company=["Bloomberg","Microsoft","Uber","Goggle","IBM","Netflix"];
console.log(company);
let val=(company.shift());
console.log(company);
console.log(val);
console.log(company.splice(1,1,"Ola"));
console.log(company);
company.push("Amazon");
console.log(company);