class Vehical{
    #type;
    #color;
    #regNumber
    constructor(type,color,num){
        this.#type = type;
        this.#color = color;
        this.#regNumber = num;
    }

    get regNumber(){
        return `MH 12 ES ${this.#regNumber}`;
    }

    get type(){
        return this.#type;
    }
}

//  car bike bus...............

class car extends Vehical{
constructor(color,num){
    super('car',color,num)
}
}

class bike extends Vehical{
    constructor(color,num){
        super('car',color,num)
    }
    }

    class bus extends Vehical{
        constructor(color,num){
            super('car',color,num)
        }
        }


        // let car1 = new Vehical( 'car','black',9999);
        // console.log("car1:",car1.regNumber);

        // let x = car1.regNumber;
        

        class ParkingLot{
            #floor;
            constructor(number){
                this.#floor = ['PF1','PF2','PF3'];
                this.NumOfFloors = number;
            for(let i=0;i<number;i++){
                    this.#floor[i]= new ParkingFloor(i,number);
            }

            }

            findSlot(type){
            //  ytpe of vehical and mt slot 
            for(let i=0;i<this.NumOfFloors;i++){
                // iterating throw slots
                for(let slot of this.#floor[i].parkingSpots){
                    if(slot.type === type && !slot.isBooked){
                            return {floornumber: i,slot: slot};
                    }
                }
            }
            return false;
            }

            parkVehical(vehical){
                let slot = this.findSlot(Vehical.type);
                // console.log('slot,slot');
                // slot.slot.book = true;
                  
            }
        }


class ParkingFloor{
     #floornumber;
constructor(floornumber,maxFloor){
    this.#floornumber = floornumber;
    this.parkingSpots = [];

    for(let i=0;i<maxFloor;i++){
    //    depending on floornumber push vehicl
    if(i===0){
        this.parkingSpots.push(new slot('bus',i)); 
    }else if(i==1){
        this.parkingSpots.push(new slot('car',i)); 
    }else{
    this.parkingSpots.push(new slot('bike',i)); 
    }
    }
    
}
}
class slot{
    #isBooked;
     constructor(type,number){
        // number = floornumber
        this.number = number;
        this.type = type;
        this.#isBooked = false;

     }
     get isBooked(){
        return this.#isBooked;
     }

     set book(bool){
          this.#isBooked = bool;
     }
}

let p = new ParkingLot(3);
console.log('p:',p);

let c1 = new car('bike',9999);

p.parkVehical(c1);