// async function asaw(){
//     setTimeout(() => {
//          console.log("this is async/await example")
//     }, 2000);
//  return await (" async/await example")
// }
// asaw().then(function(output){
//     console.log(output);
// })

commentcode=async()=>{
    return new Promise((commentingpost)=>{
     setTimeout(()=>{
       commentingpost("comment the post")
    })
 })
 }
likecode=async()=>{
   return new Promise((likingpost)=>{
    setTimeout(()=>{
      likingpost("liked the post")
   })
})
}
async function createpost(){
    var post=new Promise((cpost)=>{
        setTimeout(()=>{
            cpost("post created succesfully")
        },1000)
    })
 var[post,likes,comment]=await Promise.all([ post, likecode(),commentcode()])
 console.log( post)
 console.log( comment)
 console.log( likes)
}
createpost()