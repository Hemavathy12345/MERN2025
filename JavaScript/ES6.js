//EC6=> ECMA script standard 6
// 1. variable dec
var a=10
const con=3.14;
console.log(a)
console.log(con)
{
    var a=20;
    let b=30;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(con)

//3.class and objects

class ClassEg{
    constructor(){
        this.a=10
    }
   // 4.Arrow function
   fun = ()=>{
    console.log(this.a)
   }
}
obj=new ClassEg()
console.log(obj.a)
console.log(obj.fun())

// 5. Ternary Operator
a=10
console.log((a%2==0?"Even":"Odd"))

// 6. Spead Operator
a=[10,20,30]
b=[40,50,60]
console.log([...b,...a])

// 7.Rest Operator[...]


function restOf(a,b,...args){
    console.log(a,)
    console.log(b)
    console.log(args)
}
restOf(10,20,30,40,50)


// 8. Destructuring Operator
var a=[10,20,30]
var [a,b,c,d]=a
console.log(a,b,c,d)


// 9.Hoisting


console.log(a)
const a=10
console.log(b)
var b=10
console.log(c)
let c=10


// Function Hoisting

console.log(fun())
function fun(){
    return "Hello"
}

console.log(fun())
function fun(){
  //Undefined
}

