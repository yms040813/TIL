//const foo = "I'm foo";
//console.log(foo);
//console.log(window.foo);


/*const test = 'This is test';
console.log(window.test);
const sayFoo = function(){
    console.log(this.test);
}
sayFoo(); */


/*var value = 100;
var myObject = {
    value:1,
    func1: function(){
        this.value += 1;
        console.log('func() called. this.value : ' + this.value);
        func2 = function(){
            this.value +=1;
            console.log('func2() called. this.value : ' + this.value);
            func3 = function(){
                this.value += 1;
                console.log('func3() called. this.value : ' + this.value);
            }
            func3();
        }
        func2();
    }
    
};
myObject.func1(); */

var value = 100;
var myObject = {
    value:1,
    func1: function(){
        var that = this;
        this.value += 1;
        console.log('func() called. this.value : ' + this.value);
        func2 = function(){
            that.value +=1;
            console.log('func2() called. this.value : ' + that.value);
            func3 = function(){
                that.value += 1;
                console.log('func3() called. this.value : ' + that.value);
            }
            func3();
        }
        func2();
    }
    
};
myObject.func1();

