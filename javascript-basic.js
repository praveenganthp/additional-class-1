//console.log("hello");
//for(i=0; i<=10; i++){
  //  console.log(i)

let arr=['apple','mango','orange','liwi'];
for(let i=0; i<=arr.length; i++){
   // console.log(arr[i]);
}

//for of loop
// we go to loop a array with simple - using an element with for of loop
for(let ele of arr){
  //  console.log(ele);
}

//for in loop = loop for object
var person = {
    name:'praveen',
    age: 22,
    email: 'praveeen@gmail.com'
}
for(let key in person){
    //template literal key =$ for using concard
    //console.log("key is" + key + " and " + "the value is "+ person[key]);

}

//JSON data
let personJSON = JSON.stringify(person);
console.log(person); //object data type
console.log(personJSON);//it is string data type
//here we change a object to string usin JSON

// JSON data to object --convert
let personobj=JSON.parse(personJSON);
console.log(personobj);

let arrJSON = JSON.stringify(arr);
console.log(arr); //object data type
console.log(arrJSON);//it is string data type
//usually we use JSON fo transfer data in string type = JSON data

// JSON data to object --convert
let arrobj=JSON.parse(arrJSON);
console.log(arrobj);
for(let el of arrobj){
    console.log(el)
}

var students =[
    {
        id: 1,name: 'xxx', age: 20
    },
    { id: 2,name: 'yyy', age: 21},
    {id: 3, name:'zzz', age: 22},
]
//console.log(students[2].name);
// lopp an array
for(let ele of students){
    console.log(ele);
    console.log(ele.name);
}
