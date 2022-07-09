//  stack
// LIFO
// Array

class Stack{
   constructor(){
this.length = 0;
this.Stack = [];
this.mapArr = [];
this.filterArr = [];
this.Reduce = 0;

   }
push(...arr){
    // console.log('arr:',arr);
    // let arr1 = arr;
   arr.forEach((el) => {
    //    this.Stack.push(el);
    let index = this.length;
    this.Stack[index] = el;
    this.length++;

    });
    // console.log(x);

}
map(...arr){
   arr.map((el,i) => {
   this.mapArr[i] = el;
    });
    console.log("map:",this.mapArr);
}

filter(){
    let i = 0;
    this.Stack.filter((el) => {
        if(el%2===0){
            this.filterArr[i] = el;
            i++;
        }
    });
    console.log("filter:",this.filterArr);
}




remove(){

let index = this.length-1;
let lastValue = this.Stack[index];
console.log("lastValue:",lastValue);
delete this.Stack[index];

this.Stack.length--;

this.length--;
}

peek(){
    return this.Stack[this.length-1];
}

isEmpty(){
    let value = this.length === 0 ? 'Stack is Empty' : `Stack has ${this.length} values`;
    console.log(value);
}

}

Stack.prototype.reduce= function (){
    this.filterArr.reduce((sum,el) => {
         this.Reduce = this.Reduce+el;
    });
    console.log("reduce:",this.Reduce);
}


Stack.prototype.chaining = function(...arr){
let chain = arr.map((el) => {
     return el;
}).filter((el) =>{
    return el%2==1;
}).reduce((sum,el) => {
    return sum+el;
});

console.log("Chaining:",chain);
}


let s1 = new Stack();

// s1.isEmpty();

s1.push(1,2,3,4,5,6,7,8,9);

s1.remove();

s1.push(10);

// map

s1.map(9,8,7,6,5,4,3,2,1);


// filter

s1.filter();

// reduce 
s1.reduce();

// bonas

s1.chaining(11,12,13,14,15,16,17,18,19,20);


let last = s1.peek();

console.log("last:",last);

s1.isEmpty();
console.log('s1:',s1);