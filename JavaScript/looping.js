var a=[10,20,30];
var b={name:'Hema',age:22};
// for (let i in b){
//     console.log(i,b[i]);
// }
// set = new Set([1,2,3,4,5,"hema",]);
// for(let i in set){
//     console.log(i);
// }

// for of

for(let [i,j] of Object.entries(b)){
    console.log(i,j);
}