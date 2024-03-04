/*
1. +  যোগ 
2. -  বিয়োগ 
3. *  গুণ 
4. /  ভাগ 
5. %  ভাগশেষ নিনয়  
6. ** Exponentiation Operator (পাওয়ার দেওয়ার জন্য ব্যবহার করা হয়।)
7. ++  1  যোগ করে ।
8. --  1  বিয়োগ করে । 
9. =


*/

//============================================================
let x = 50;
let y = 2;
let result = x - y;
console.log(result)

let p = 50; 
let q = 4;
let resultS = p % q;
console.log(resultS)

let r = 50;
let t = 4;
let resultT = r * q;
console.log(resultT)
console.log(r**2)    // পাওয়ার জাখুশি তাই ব্যবহার করা যাবে।**
console.log(r**t)    // পাওয়ার জাখুশি তাই ব্যবহার করা যাবে।
let g = 9;
 g++;               // g এর সাথে ১ যোগ করা হয়েছে ।
 console.log(g)



//================================================================
    //সুইচ এর ব্যাবহার।
                 //use of switch

let day = 2;   //এখানে যে নাম্বার লিখা হবে সেই লাইন প্রিন্ট করা হবে।

switch(day){
    case 0:
      day = "Sunday";
    break;
    case 1:
      day = "Monday";
    break;
    case 2:
      day = "Tuesday";
    break;
    case 3:
      day = "Wednesday";
    break;
    case 4:
      day = "Thursday";
    break;
    case 5:
      day = "Friday";
    break;
    case 6:
      day = "Satarday";
    break;
    default:
      day = "Not Found"  //এর বেশি নাম্বার লিখা হলে এই লেখাতি দেখাবে।
    

}
console.log(day);
//=======================================================










console.log('Mate.PI');
let sultan=('15');
let shimul=('5');
console.log("sultan+shimul");


//the code below is executing a function

document.write('hello world. how are you');
console.log("hello world");
console.log("kire tutta");
//alert('Welcome to my web-site');



//===========================================================


//এগুলা সাধারণত বিভিন্ন ফরম এর জন্য ব্যাবহার করা হয় বয়স এর জন্য।
// code block pactice is here
let ageDB=18;
let userAge=19;
if (userAge > ageDB) {
  console.log("You can tegister");
} else {
  console.log("Yor are too young");
}

let myName = "My name is";
let name = "Sultan"
console.log(myName + " " + name)



let tomarName = "Sumaiya";
let amarName = "Sultan mahmud";
console.log(tomarName+" + "+amarName);

let bangla = 10;
let english = 59;
console.log(bangla+english);


//===========================================================
          // All Javascripe operators hear


// 1. == Equal value only
// 2. === equal value and equal type
// 3. < less than
// 4. > greater than
// 5. > greater than or equal to
// 6. <= less than or equal to
// 7. != not equal

      //Logical operators

// 8. && and
// 9. // or
// 11. ! not

let results = (5==5);
console.log(results);
