let math = 30;
let bangla = 10;
console.log(math+bangla) //  Thi line is Example below.


//"prompt" নিচের ফাংশন গুলো user কাছ থেকে data নেওার জন্য ব্যবহার করা হয়।

//এখানে prompt, confirm  ও  alert হল তিনটি  attibuted
let checkBox = prompt("whai is your age?" ,18) //user এর বয়স জিজ্ঞাস করা যায় 

alert(`you are ${checkBox} year old`)  //user যে বয়স দেবে alert সেই বয়সটাই দেখাবে।

let askQuestion = confirm("Are you sure");
let userAnswer = (askQuestion==true) ? window.location ="http://google.com" : alert("Thnks for staying")//এতাকে বলাহয় বুলিয়ান (boolran), মানে সত্য বা মিথ্যা।

//askQuestion যদি true হয় তাহলে Ok press দিলে উপরের link নিয়ে যাবে। আর সেটা না হলে Thanks for staying লেখা উঠবে।
alert("Welcome to google")