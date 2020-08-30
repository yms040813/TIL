const arr = ['zero','one','two'];

arr.color = 'blue';
arr.name = 'number_array';

for(const prop in arr){
    console.log(prop,arr[prop]);
}


for(const i = 0; i < arr.length; i++){
    console.log(i, arr[i]);
}