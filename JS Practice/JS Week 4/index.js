//   //Creating an Object 
//   const Twin = {};
//   Twin.name = "Eric Arhin-Bannerman";
//   Twin.email = "ericarhinbannerman@gmail.com";
//   Twin.age = 30;

//   let Me = {
//       name : "Derrick Arhin-Bannerman",
//       email : "derrickarhinbannerman@gmail.com",
//       age : 30, 
//   }

//   let Area = {
//       length : 27,
//       width : 15,
//   }

//   console.log(Me);
//   console.log(Twin);
//   console.log(Area);


  class Human {
    constructor(name,age) {
        this.name = name;
        this.age = age;
  
    }

    talk() {
        console.log(` ${this.name} speaks`);
    }
  }

  class Man extends Human {
    constructor(name,age) {
        super(name, age);
    }
}
    const man = new Man ("Kofi",27);
    man.talk();

  

  
  //Object Inheritance
