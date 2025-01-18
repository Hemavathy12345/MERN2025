a="SECE";
console.log(a);
b=true;
console.log(b);
console.log(typeof a);
console.log(typeof b);

//object
array =['a',1,'hema',[10,2],true];
console.log(array);
console.log(typeof (array));

//map
obj={
    fname:'Hema',
    lname:'J',

}
console.log(obj);
console.log(typeof (obj));
console.log(obj.fname);

obj={};
console.log(obj);
obj['fname']='Hema';
obj['lname']='J';
console.log(obj);
obj=new Object();
console.log(obj);
obj.fname='Hema';
obj.lname='J';
console.log(obj);



//set
set=new Set(['hello',4,"22"]);
console.log(typeof(set));
console.log(set);