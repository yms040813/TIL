const foo = 100;
// 함수는 값처럼 취급되므로 변수에 할당 가능
const bar = function() {
    return 100;
};

console.log(bar());
//foo와 bar의 차이점은 bar는 참조값을 가지고 있으므로 bar()

const obj = {};
obj.baz = function() {return 200;} // 객체의 속성으로 할당
console.log(obj.baz());

const arr = [];
arr[0] = function(){return 300;}; //함수의 원소로 할당함
console.log(arr[0]);