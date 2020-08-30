/*function Person(name, age, gender, position){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

const foo = {}

Person.apply(foo,['foo',30,'man']);
console.dir(foo); 

function myFunction(){
    console.dir(arguments);


    const args = Array.prototype.slice.apply(arguments);

    console.dir(args);
}
myFunction(1,2,3); */

const arrA = [1,2,3];
const arrB = arrA.slice(0);
const arrC = arrA.slice();
const arrD = arrA.slice(1);
const arrE = arrA.slice(1,2);

console.log(arrA);
console.log(arrB);
console.log(arrC);
console.log(arrD);
console.log(arrE);