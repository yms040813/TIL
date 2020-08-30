/*const Person = function(name) {
    this.name = name;
};

const foo = new Person('foo');
console.log(foo.name); 

const foo = {
    name: 'foo',
    age: 35,
    gender: 'man',
};
console.log(foo);

function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

const bar = new Person('bar',33,'woman');
console.log(bar);

const baz = new Person('baz',25,'man');
console.log(baz); */

function Person(name, age, gender, position){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

const qux = Person('qux',20,'man');
01
console.log(qux);

console.log(window.name);
console.log(window.age);
console.log(window.gender);