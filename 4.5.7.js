// console.log("This is global context");

// function ExContext1(){
//   console.log("This is ExContext1");
// }
// function ExContext2(){
//   ExContext1();
//   console.log("This is ExContext2");
// }

// ExContext2();

// function execute(param1, param2){
//   const a = 1, b = 2;
//   function func(){
//     return a+b;
//   }
//   return param1 + param2 + func();
// }
// console.log(execute(3,4));

// var var1 = 1;
// var var2 = 2;
// function func(){
//   var var1 = 10;
//   var var2 = 20;
//   console.log(var1);
//   console.log(var2);
// }
// func();
// console.log(var1);
// console.log(var2);

var value = "value1";
function printValue(){
  return value;
}
function printFunc(func){
  var value = "value2";
  console.log(func());
}
printFunc(printValue);