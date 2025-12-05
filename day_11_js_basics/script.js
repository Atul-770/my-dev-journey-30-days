let age = 40;  // variable decleration but value change
let num; 
age = age+1;
num = true; //boolean
const price  = 20+1;  //const never change but here is value is 21 because compiler read from left maybe
// price = 30;  error as price is fixed
console.log(age ,num, price);
console.log(23); // just checking it indeed break line automatically in outputs

let none = null;
console.log(none);  // this indeed works and none value is null

let nn = undefined;
console.log(nn); // it print undefined 

let name = "Jhone Doe";
console.log(name[2]);

name[2] = 'p';
console.log(name); // doesn not throw error even string is immutable 

// changing methods
let updated_name = 'p' + name.substring(1)
console.log(updated_name);

// spread method
let name_list = [...name];
name_list[0] = 'p'
full_name = name_list.join('')
console.log(full_name)

// slice method
let slice_name = 'p' + name.slice(1)
console.log(slice_name)

// slice and substring are mainly same but 
// slice accept -ve index value where substring doesn't
// and id start is > than end slice return "" empty string but substring automatically swap this such that start is < end and produce the result which may not wanted

// arrays

let arr = [10,20,30]
arr.push(40)
let last = arr.pop()  // take no arguments and only remove and return last value 
console.log(arr[0], last)

// methods of removing 
arr.splice(2,1) // removing 1 element from index 2
console.log(arr)

arr.push(50,60)
arr.splice(arr.indexOf(50),1)
console.log(arr)

// map 
// always return new array
let arr_maped = arr.map(x => x/10)
console.log(arr_maped)

let arr_filtered = arr.filter(x => (x>25))
console.log(arr_filtered)

let finder = arr.find(x => x===60)
console.log(finder)

let inc = arr.includes(60)
console.log(inc)

let som = arr.some(x => x%3 === 0)
console.log(som)

// object

let obj = {
    name: "jhone doe",
    age: 30
}
console.log(obj.age)

console.log(obj['name'])
console.log(obj['age'])

// finction normal

function demo()
{
    console.log("Hello there!")
}

demo()

// arrow function

let hello = (a,b) =>{
    a= 20;
    b = 30
    console.log(a+b);
}

hello(10,20)

// consitions
let a =30
if(a>30){
    console.log(true)
}else{
    console.log(false)
}

// loop
for(let i=0; i<5; i++){
    for(let j=5; j>i; j--)
    {
        process.stdout.write('*')
    }
    console.log()
}