const myObject = {
    name: 'foo',
    sayName: function(){
        console.log(this.name);
    }
};

const otherObject = {
    name:'bar'
};

otherObject.sayName = myObject.sayName;

myObject.sayName();
otherObject.sayName();