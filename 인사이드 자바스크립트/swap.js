let objA={value:1};
let objB={value:2};
function swap(a,b){
    let objT = {};
    objT.value = objA.value;
    objA.value = objB.value;
    objB.value = objT.value;
}
swap(objA, objB);
console.log(objA.value,objB.value);