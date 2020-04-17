
//Javascript basics
 
//1. Varibles
 var name = "akansha";
 console.log("Variable "+name);
//2.Functions
  function greet(name){
   console.log("My name is "+name);
  }
  greet(name);
//3.let & const
    let age = 25;
    const city = "pune"; //const value cannot be changed.
//4. arrow functions
     const summary = () =>{
      return console.log( "arrow function");
     }
     summary();
//5.objects, properties and methods
    const person = {
      name: "akansha",
      age: "52",
      greet: function(){
        console.log("Akansha is "+this.age+"years old");
      }
    }
    person.greet();
//6. array and array methods
     const hobbies = ["Sports", "Cricket"];
     for(hobby of hobbies){
       console.log("hobby "+hobby);
     }
//7. array, objects are reference types
     //array and objects are reg type, we are editing the thing that the constant is pointing to.
//8.spread and rest operators
     //to copy an array or object into another one spread is used, slice is also used.
     let copyHobbies = hobbies.slice();
     console.log("Splice methods "+copyHobbies)
     copyHobbies = [...hobbies];
     console.log("Using spread operator to copy an array "+copyHobbies);

     let copyPerson = {...person};
     console.log("Copy of person using spread "+copyPerson);
     
//9.destructuring
      let{ copyName, copyAge} = person;
     console.log("copyName "+copyName+" copyAge "+copyAge);
     function abc({name}){
            console.log("destructuring "+name);
     }
     abc(person);
//10. async cose and promises
      setTimeout(() => {
        console.log("Time out done")
       // fetch().then(res => console.log(res));
      }, 2000);

      // const fetch = () => {
      //   let promise = new Promise(resolve, rejects);
      //   resolve("Promise resolved");
      //   return promise;
      // }
//11. Template strings
     console.log(`Template string ${name}`);