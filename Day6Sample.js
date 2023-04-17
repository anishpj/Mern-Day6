// Part1: Q2
// alert("I'm invoked from js file for Part 1 Question no. 2");
// 
// // Part1: Q3
// alert("I'm JavaScript! for Part 1 Question no. 3");
// alert('Hello') // this line is not having semicolon
// alert(`Wor
//  ld`) 
// alert(3 +
// 1
// + 2); // this is multiple line code and its working
// 
// Part1: Q4
// let admin=9, fname=10.5; 
// fname = '"Guvi';
// lname = ' geek"';
// admin = fname+lname;
// alert(admin + " for Part 1 Question no. 4"); // "Guvi geek"
// 
// // Part1: Q5
// let fname1=10.5; 
// fname1 = "Guvi";
// let lname1 = " geek"
// let name1 = fname1+lname1;
// alert( `'hello ${name1}' ` );
// 
// Part1: Q6
// let a = parseInt(prompt("First number?"));
// let b = parseInt(prompt("Second number?"));
// let TotalValue = a + b; 
// alert(` The sum of two number is ${a} and ${b} is ${TotalValue} `);
// 
// // Part1: Q7
// var a = "2" > "12";
// // by changing this condition from true to false we shall make this statement(console o/p) from "Code is Blasted" to "Diffused".
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }
// 
// // Part1: Q8
// let a = prompt("Enter a number for Question 8?");
// 
// // This below statement will always be true if we given any input(numericals/alphanumericals/alphabets.,) and print o/p as "OMG it works for any number inc 0".
// // To Print "Success" we have to make this statement as false->for this we have to enter Null value/No input, then the statement get false and print o/p as "Success".
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }
// 
// //Part1: Q9
// let value = prompt('How many runs you scored in this ball');
// if (value == 4) {
//       console.log("You hit a Four");
// } else if (value == 6) {
//       console.log("You hit a Six");
// } else {
//       console.log(`I couldn't figure out : You hit a ${value}`);
// }
// 
// Part1: Q10
// let login = prompt('Employee/Director');
// let message = (login == 'Employee') ? 'Greetings : Welcome ' : (login == 'Director') ? 'Greetings : Welcome ' : (login == '') ? 'No login' : '';
// console.log(`${message} ${login} `);
// 
// Part1: Q11
// // You cant change the value of the msg
// let message;
// if (null || 2 || undefined )
// {
//   message = "welcome boss";
// }
// else
// {
//  message = "Go away";
// }
//   console.log(message); 
// 
// // Part1: Q12
// let message = "Welcome Boss";
// let lock = false;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);
// // Part1: Q13
// let message;
// let lock = 2;
// lock  =  false;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);
// // Part1: Q14
// //You can change only 2 characters
// let iz = 3;
// while (iz) {
//   console.log( iz-- );
// }
// // Part1: Q15
// // Change the code to print 1 to 10 in 4 lines
// let NumOflines = 4;
// let MaxNum = 10;
// for ( let ix = 0; ix < NumOflines; ix++) {
//  var  new_stringx ="";
//     for ( let jx = 1; jx <= MaxNum; jx++) {
//     new_stringx +=  jx;
//     }
//     console.log(new_stringx);
// }
// // Part1: Q16
// // Change the code to print even numbers - You are allowed to modify only one character
// for (let num = 2; num <= 20; num += 2) {
//     console.log(num)
//   }
// // Part1: Q17
// // Change the code to print all the gifts
// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`);
// }
// // Part1: Q18
// Fix the code to disarm the bomb.
// let countdown = 100;
// while (countdown < 0) {
//   countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
// }
// // Part1: Q19
// var lemein = "0";
// var lemeout = 0;
// var msg = "";
// if (lemein) {
//  msg += "hi";
//  }
// if (lemeout) {
//  msg += 'Hello';
// }
// console.log(`${msg}  -- Answer: Here the o/p is hi -  because in lemeout we have given value as 0 - this represent the statement as false, behalf of this "Hello" is not printed in o/p.`);
// Answer: Here the o/p is hi -  because in lemeout we have given value as 0 - this represent the statement as false, because of this Hello is not printed in o/p.
// 
// // Part2:Q1 
// // Write a code to print the numbers in the array
// // Output: 1234567891011
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
// for (var i = 0; i < numsArr.length; i++) {
//  new_string += numsArr[i] 
// }
// console.log(new_string);
// // Part2:Q2
// var numsArr12 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
// var numsArr1  = numsArr12.toString();
// for (var i = 0; i < numsArr1.length; i++) {
//  new_string += numsArr1[i] ; // + ","
// }
// console.log(new_string);    
// // Part2:Q3
//  // Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
// var new_string3 = "";
// var numsArr13 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 10; i >= 0 ; i--) { //numsArr13.length
//  if(i>0){
//     new_string3 += numsArr13[i] + " ";
//  }else{
//     new_string3 += numsArr13[i];
//  }   
// }
// console.log(new_string3);
// // Part2:Q4
// // // Write a code to replace the array value — If the number is even, replace it with ‘even’
// var numsArr4 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr4[i] %2 == 0 )
//  {
//  numsArr4[i] = "even"
//  }
// }
// console.log(numsArr4);
// // Part2:Q5
// // Write a code to replace the array value — If the index is even, replace it with ‘even’.
// var numsArr5 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(i %2 == 0 )
//  {
//  numsArr5[i] = "even"
//  }
// }
// console.log(numsArr5);
// // Part2:Q6
// // Write a code to add all the numbers in the array
// var numsArr6 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0;
// for (var i = 0; i < numsArr6.length; i++) {
//  sum = sum + numsArr6[i];
// }
// console.log(sum);
// // Part2:Q7
// // Write a code to add the even numbers only
// var numsArr7 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i < numsArr7.length; i++) {
//  if( numsArr7[i] %2 == 0){
//  sum = sum + numsArr7[i]
//  }
// }
// console.log(sum);
// // Part2:Q8
// //Write a code to add the even numbers and subract the odd numbers
// var numsArr8 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=100;
// for (var i = 0; i <=10; i++) {
//  if (numsArr8[i]%2!=0) {
//     sum -= numsArr8[i]
//     console.log("Odd Num" + numsArr8[i])
//  } else {
//     sum += numsArr8[i]
//     console.log("Even Num" + numsArr8[i])
//  }
// }
// console.log(sum);
// // Part2:Q9  
//  // Write a code to print inner arrays
// var numsArr9 = [[1, 2, 3, 4, 5], [ 6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr9.length ; i++) {
//     console.log( numsArr9[i])
// }
// // Part2:Q10
// // Write a code to print elements in the inner arrays
// var numsArr1z = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all="";
// for (var i = 0; i < numsArr1z.length; i++) {
//  var inner_array = numsArr1z[i];
//  inner_array.toString();
//  for(var j = 0 ; j < inner_array.length;j++ ){
//     var valz =inner_array[j]
//      str_all +=valz.toString();
//  }
// }
// console.log(str_all);
// // Part2:Q11
// Write a code to replace the array value — If the index is even, replace it with ‘even’.
// var numsArr11z = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_allNumz=[];
// for (var i = 0; i < numsArr11z.length; i++) {
//  var inner_array = numsArr11z[i];
//  for(var j = 0 ; j < inner_array.length;j++ ){
//       if(j %2 == 0 )
//       {
//         inner_array[j] = "even"
//        }
// }
// str_allNumz.push(inner_array)
// }
// console.log(str_allNumz);
// // Part2:Q12
// // Write a code to print elements in the inner arrays in reverse
// var numsArr12 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=[];
// var NumsArrFinal = [];
// for (var i = 0; i < numsArr12.length; i++) {
//  var inner_array = numsArr12[i];
//  for(var j = 0; j < inner_array.length  ;j++ )
//      str_all.push(inner_array[j])
// }
// for (let k = str_all.length-1; k >= 0; k--) {
//     NumsArrFinal.push(str_all[k]);
// }
// console.log(str_all)
// console.log(NumsArrFinal);
// // Part2:Q13
// // Write a code to add elements in the inner arrays based on odd or even values
// var numsArr13 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var sum_odd13=0;
// var sum_even13=0;
// for (var i = 0; i < numsArr13.length; i++) {
//  var inner_array = numsArr13[i];
//  for(var j = 0 ; j < inner_array.length;j++ ){
//  if(inner_array[j]%2!=0)
//  {
//  sum_odd13 += inner_array[j]
//  }
//  else
//  {
//  sum_even13 += inner_array[j]
//  }
// }
// }
// console.log(sum_odd13);
// console.log(sum_even13);
// // Part1:Q1
// // Fix the code to get the largest of three.
// aa = (f,s,t) => {
//     console.log("The Given Num are : "+f,s,t);
//     if(f>s &&f>t){
//     console.log("The Largest Num is : "+f)}
//     else if(s>f && s>t){
//     console.log("The Largest Num is : "+s)}
//     else{
//     console.log("The Largest Num is : "+t)}
//    }
//    aa(1,2,3);
// // Part3:Q2
// // Fix the code to Sum of the digits present in the number
// let n = 123;
// console.log(add(n));
// function add(n)
// {
//     ap3 = n.toString().split("");
// let sum=0;
// for(var i=0;i<ap3.length;i++){
//     sum += parseInt(ap3[i]);
//  }
//  return sum;
// }
// // Part3:Q3
// //  Sum of all numbers
// const arrp33 = [9,8,5,6,4,3,2,1];
// (function() {
//  let sum = 0;
//  for (var i = 0; i < arrp33.length; i++) {
//  sum += arrp33[i];
//  }
//  console.log(sum);
//  return sum;
// })();
// // Part3:Q4
// // Fix the code to gen Title caps.
// var arrp34 = ["guvi", "geek", "zen", "fullstack"];
// var ano = function(arro) {
//     for (var i = 0; i < arro.length; i++) {
//         // arro[i] = arro[i].charAt(0).toUpperCase() + arro[i].slice(1);
//         console.log(arro[i].charAt(0).toUpperCase() + arro[i].slice(1));
//     }
//     // for (var i = 0; i < arro.length; i++) {
//         //     // var caps = arro[i][0];
//         //     arro[1].
//         //     console.log(arro[i][0]);
//         // //  console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//         //  }
// }
// ano(arrp34);
// // Part3:Q5
// // Fix the code to return the Prime numbers
// const newArray=[1,3,2,5,10];
// const myPrime=newArray.filter(num=>{
//  for(let i=2;i<num;i++){
//     if (num % i === 0) return false;
//  }
//  return num !== 1;
// });
// console.log(myPrime);
// // Part3:Q6
// // Fix the code to sum the number in that array
// const num = [10, 20, 30, 40,50,60,70,80,90,100] 
// const sum = (a, b) => a + b
// const sum1 = num.reduce(sum)
// console.log(sum1);
// // Part3:Q7
// // Fix the code to rotate an array by k times
// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = arr.length % k;
// var samp = k % arr.length;
// (function() {
//  out = arr.slice(k + 1, arr.length);
//  var count = out.length;
//  for (var i = 0; i < k + 1; i++) {
//  out[count] = arr[i];
//  count += 1;
//  }
//  console.log(out);})();
// // Part3:Q8
// // print all odd numbers in an array using IIFE function
// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function() {
//  for (var i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 !== 0) {
//  console.log(arr[i]);
//  }}
// })();
// // Part3:Q10
// // Fix the code to reverse.
// (function(str){
//    var str1 = str.split("").reverse().join("");
//     console.log(str1); 
//    })("abcd")
// // Part3:Q10
// // Fix the code to remove duplicates
// var res = function(arr){
//     newArr = [];
//     for(var i=0; i < arr.length; i++){
//         console.log("Sample 11 " + arr[i])
//         console.log("Sample 12 " + newArr)
//         console.log("Sample  " + newArr.indexOf(arr[i]))
//     if(newArr.indexOf(arr[i]) == -1) {
//     newArr.push(arr[i]);
//     } }
//     console.log(newArr)
//    }
//    res(["guvi","geek","guvi","duplicate","geeK"])
// // Part3:Q11
// // Fix the code to give the below output
// var arrayz =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
// var final=[];
// while(arrayz.length!=0)
// {
//  var outer_remove = arrayz.shift();
//  var new_object = {};
//  while(outer_remove.length!=0)
//  {
//  var inner_remove = outer_remove.shift()
//  var key = inner_remove[0]
//  var value =inner_remove[1]
//  new_object [key]=value
//  }
//  final.push(new_object)
// }
// console.log(final);

