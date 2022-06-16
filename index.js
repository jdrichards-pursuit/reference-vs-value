// // console.log('reference vs value');
// // mutable has to do with change or is malleable

// //primitive types
// // String
// // Number
// // undefined
// // null
// // boolean

// let str = 'ballgame'
// //str1 will evaluate to ballgame
// let str1 = str

// console.log('str === str1:', str === str1)

// //str will evaluate to cracker jack but
// // str1 will still be ballgame
// str = 'cracker jacks'


// console.log('str1:',str1)
// console.log('str:', str)


//how will this evaluate?
// let isSunny = true;
// let isHappy = isSunny;

// console.log(isHappy);

// isSunny = false;

// console.log(isHappy);

// Reference

// const luciano = { isHappy: true };
// const hollie = luciano;

// console.log(hollie);

// luciano.isHappy = false;

// console.log(hollie);
// 1st time hollie = {isHappy:true}
// 2nd time hollie = {isHappy:false}

//Array reference

// let lucianoHobbies = [];
// let hollieHobbies = lucianoHobbies;

// lucianoHobbies.push("drawing", "coding", "playing piano");

// // console.log('luciano:', lucianoHobbies, 'hollie:', hollieHobbies)


// hollieHobbies.push("skateboarding", "cooking", "coding");
// console.log('luciano:', lucianoHobbies, 'hollie:', hollieHobbies)

// // console.log(lucianoHobbies);


//Lesson Notes Problem
// let myHobbies = ["reading"];
// let yourHobbies = myHobbies;
// myHobbies[0] = "playing video games";

// console.log('myHobbies:', myHobbies, 'yourHobbies:',yourHobbies);

//which will the answer be....?
// ['playing video games'] party
// ['playing video games', 'reading'] heart


// let myObj1 = {car:"Jeep"}
// let myObj2 = {car:"Jeep"}

// // console.log('objs:', myObj1===myObj2)

// console.log(myObj1.car===myObj2.car)

//Louie equal Jody?

// const louie = {
//     name: "Louie James",
//     hobbies: ["reading", "playing video games", "biking"],
//   };

// const jody = {
//     name: "Jody Hawkins",
//     hobbies: louie.hobbies,
//   };
  
//   console.log(louie === jody);

   // who has the right answer?
  //dan says false heart for the win
  // jahaad says true party


  //What about the hobbies nested array?
//   const louie = {
//     name: "Louie James",
//     hobbies: ["reading", "playing video games", "biking"],
//   };

// const jody = {
//     name: "Jody Hawkins",
//     hobbies: louie.hobbies,
//   };
  
//   console.log(louie.hobbies === jody.hobbies);

const hobbies = ["drawing", "coding", "playing piano"];
//this will mutate the array despite const variable
hobbies.push("running");
// console.log(hobbies); 
// can't do this
// hobbies = ['drawing','quilting']

const obj = {color:'blue'}
//this will work despite const declaration
obj.name = "JD"
//this will not work
// obj = {car:'Mercedes'}
// console.log(obj)

//this will work let allows you to reassign const does not
// let obj1 = {carColor:'green'}
// console.log(obj1)
// obj1 = {dog:'Cavalier'}
// console.log(obj1)
// const lucianoHobbies = [
//     "drawing",
//     "coding",
//     "playing piano",
//     "running",
//     "cooking",
//   ];

  //this will mutate the lucianoHobbies array and assign the removed value to exerciseHobbies
//   const exerciseHobbies = lucianoHobbies.splice(3, 1);

//   console.log('luciano:', lucianoHobbies); 
//   console.log('exercise:', exerciseHobbies); 

  //exerciseHobbies = 'running'
//   lucianoHobbies = [
//     "drawing",
//     "coding",
//     "playing piano",
//     "cooking",
//   ];


// const lucianoHobbies = [
//     "drawing",
//     "coding",
//     "playing piano",
//     "running",
//     "cooking",
//   ];

//   const exerciseHobbies = [lucianoHobbies.slice(0,3)+
//     ', '  + lucianoHobbies.slice(4)]


// console.log('luciano:', lucianoHobbies); 
// console.log('exercise:', exerciseHobbies); 


//How can I copy and array or object so they are not connected

//these are both referencing the same object
// let obj1 = {car:"mercedes"}
// let obj2 = obj1

//SPREAD OPERATOR will allow you to copy the contents of an object or array to another so that that they are not pointing to the same place in memory

// let obj3 = {dogType:'Cavalier'}

// //obj4 is assigned to an empty object where we spread the values of copy 3 into the new object.
// let obj4 = {...obj3}
// obj5 is assigned to obj3. they are pointing to the same object in memory 
// let obj5 = obj3

// // console.log('obj4:', obj4)
// // console.log('obj3===obj4:', obj3 === obj4)
// obj3.dogName = "Cadeau"

// console.log('obj3: ', obj3,'obj5: ',obj5, 'obj4: ', obj4)

// //spread operator with arrays
// let arr = [1,2,3]
//arr1 is pointing to the same place in memory as arr
// let arr1 = arr
// arr2 is in it's own place in memory. a new array is created and we spread the values of arr into the new array
// let arr2 = [...arr]

// console.log('arr === arr1:', arr===arr1)
// console.log('arr === arr2:', arr===arr2)

let myPerson = {
    name:'JD',
    favColors:['fuschia','green', 'cyan'],
    address:{
        num:'224 Ryan Blvd',
        zip:'10011'
    }
}

//this creates a shallow copy of the object. that means that any nested objects will still be connected
const myPerson2 = {...myPerson}
//this will be false
console.log(myPerson === myPerson2)
//nested objects and arrays have not been copied so they will be true for equality
// console.log(myPerson.address === myPerson2.address)


//nested objects are automatically connected to the object that was copied in like on line 215
// But we can key into the object and then do the same procedure as before. Create a new object or array, then spread the values from the old object or array into the new Object or array.
myPerson2.favColors = [...myPerson.favColors]
myPerson2.address = {...myPerson.address}
let myPerson3 = myPerson2

//these will now be false
// console.log('after copy', myPerson.favColors === myPerson2.favColors)
// console.log('after copy', myPerson.address === myPerson2.address)
// this will be true
// console.log('myPerson2 === myPerson3', myPerson2 === myPerson3)
//this will be true because it is a primitive value
console.log('myPersonName === myPerson2Name ', myPerson.name === myPerson2.name )
myPerson.name = 'Natasha'
// this will be false because we changed one of the primitive values
console.log('myPersonName === myPerson2Name ', myPerson.name === myPerson2.name )