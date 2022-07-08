
let Students = [];
class Student {
    #Password;
    constructor(name,id){
        this.name = name,
        this.id = id
    }
    signup(UserName,Password){
        // validation of username & password as per rules;
        let isValidated = false;
        // validating username & password methods;
        isValidated = this.#validateUsername(UserName) && this.#validatePassword(Password);

if(isValidated){
    this.#Password = Password;
    this.UserName = UserName;
    console.log("user resister successfully!");
    Students.push(this);
} else {
    console.log("please follow username or password rules");
}
    }

    #validateUsername(Username){
        // if("vijay123"==Username){
        return true;
        // }
    }
    #validatePassword(Password){
        return true;
    }
    login(UserName,Password){
        if(UserName === this.UserName && Password === this.#Password){
            console.log("logged In!!");
        }else{
            console.log("Authentication Failed!!");
        }
    }
}


// let s1 = new Student("Vijay",1);
// s1.signup("vijay123","password");
// s1.login("vijay123","password");
// let s2 = new Student("sagar",2);
// s2.signup("sagar123","word");
// s2.login("sagar113","word");
// // s1.#validatePassword();
// console.log("s1:",s1);
// console.log("s1:",s2);


class Student extends User{
    constructorI(name,id){
        super(name,id);
        this.numOfAssignments = 0;
    }
submitAssignment(){
    this.numOfAssignments++;
}


}

class Admin extends User{
    constructor(name,id){
        super(name,id);
    }

    removeStudent(id){
     Student=Student.filter((el) =>{
      return el.id!==id;
     });
     
    }
} 


let s1  = new Student("vijay",1);
s1.signup("vijay123",9969);
s1.signup("vijay123",9969);
let s2  = new Student("pratik",2);
s1.signup("pratik123",0000);
s1.signup("pratik123",0000);
let n = new Admin("nrupul",11);
n.removeStudent(7);
console.log("n:",n);
console.log(Students);

