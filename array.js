let heroes=["ironman","hulk","thor","batman"];
let marks=[96,75,48,83,66];
let info=["rahul",86,"delhi"];//differnt type of value is also accepted here //
console.log(marks);
console.log(marks.length);//property
console.log(heroes);
console.log(heroes.length);
//array indices//

console.log(marks[0]);
console.log(marks[0]=66);
console.log(marks);

//looping over an array//

let heroes1=["ironman","hulk","thor","batman","spiderman"];
for(let i=0;i<heroes1.length;i++)//for loop//
    {
        console.log(heroes1[i]);
    }
for(let hero of heroes1 ){  //for of loop//
    console.log(hero);

}
for(let hero of heroes1 ){  //for of loop using upper case//
    console.log(hero.toUpperCase());
}

//array in js //

let food=["potato","lichi","tomato"];
console.log(food);
food.push("chips","burger","paneer");//push add to end //
console.log(food);
let deletedValue=food.pop();//pop method (delete form end and return the value)//
console.log(food);
console.log(deletedValue);
let marks2=[34,66,89,12,78];
console.log(marks2.toString());//tostring(convert array to string)
let marvel_heroes=["thor","spiderman","ironman","antman","dr strange"];
let dc_heroes=["superman","batman"];
let heroes3= marvel_heroes.concat(dc_heroes);//concat (jon multiple heroes)//
console.log(heroes3);
marvel_heroes.unshift("antman");//add to start//
console.log(marvel_heroes);
let val=marvel_heroes.shift();//delete form start and return //
console.log(marvel_heroes);
console.log(val);
console.log(marvel_heroes.slice(1,3));//slice method
let arr=[1,2,3,45,67]
console.log(arr.splice(2,2,101,102));//splice method//
console.log(arr);
//add element 
arr.splice(2,0,101);
console.log(arr);
//delete elment
arr.splice(3,1);
console.log(arr);
//replace element
arr.splice(3,1,101);
console.log(arr);
//only index passed 
arr.splice(4);
console.log(arr);
//no index passs
arr.splice();