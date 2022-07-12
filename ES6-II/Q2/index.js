

class Queue{
    constructor(){
        this.length = 0;
        this.queue = [];
    }

    enQueue(value){
        // console.log(arr);
        // arr.forEach((el) =>{
        let  index = this.length;
        this.queue[index]=value;
        this.length++;
        // });
        console.log(this.queue);
    }

    enQueueThree(...arr){
        arr.forEach((el) =>{
            let  index = this.length;
            this.queue[index]=el;
            this.length++;
            });
            console.log(this.queue);
    }
    
}

Queue.prototype.deQueue = function(){
let deQueueValue = this.queue[0];    
this.queue.splice(0,1);
this.length--;
    console.log("deQueueValue:",deQueueValue);
}

Queue.prototype.deQueueThree = function(){
    console.log("deQueueThree:",this.queue.splice(0,3));
    this.length--;
    this.length--;
    this.length--;
    }

let s1 = new Queue();
s1.enQueue(1);
s1.enQueue(2);
s1.enQueue(3);
s1.enQueue(4);
s1.enQueue(5);
console.log("Length:",s1.length);
s1.deQueue();

s1.enQueueThree(7,8,9);

s1.deQueueThree(); 