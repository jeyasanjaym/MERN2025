var a;
var a=10;
var a = 20;
console.log(a)
let b;
b=30;
b=40;
console.log(b);
const c =20;
console.log(c);

function sum(){
    console.log("hello sanjay");

}
sum();

var sum1=()=>{
    console.log("hello sanjay hai")
}
sum1();

var arr = [10,20,30];
console.log(arr[1]);
console.log(arr);

var marks = [10,20,30,40,50];
var [m1,m2,m3,m4,m5] = marks;
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);

function demo(){
    console.log("hello sanjay mjs")
}

var callback=(func)=>{
    console.log("hello callback")
    func();
}
callback(demo);
var arr = [10,20,30,40,50];
var double = arr.map(num => num*2)
console.log(double);
var odd = arr.filter(num => num%3==0)
console.log(odd);

    var total = arr.reduce((val,num)=>val+num,0)
    console.log(total);

let final = arr.map(num => num*2);
let final2=arr.filter(num => num>20);
let final3 = arr.reduce((sum,num) => sum + num,0);
console.log(final3);


