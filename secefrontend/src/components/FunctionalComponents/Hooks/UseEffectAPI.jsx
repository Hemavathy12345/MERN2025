import { useEffect, useState } from "react"
import axios from "axios"
const UseEffectAPI = () => {
    var [post, setPost] = useState([]);
    var [post1,setPost1]=useState([]);
    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then((res) =>{ console.log(res.data);
         setPost(res.data)}).catch((err) => console.log(err))
    
   
        axios.get('https://fakestoreapi.com/products')
         .then((res) =>{ console.log(res.data);
          setPost1(res.data)}).catch((err) => console.log(err))
 
     }, [])
    return (
        <div>
            <h1>This is useEffect API Example</h1>
            <h3>The content inside ny JSONPlaceholder API post</h3>
            <ul>
                {post.map((post) => (
                    <li key={post.id} style={{ listStyle: "none" }}>{post.title}</li>
                ))}
                  {post1.map((post) => (
                    <li key={post.id} style={{ listStyle: "none" }}><img src={post.image}></img></li>
                ))}
            </ul>
        </div>
    )
}
export default UseEffectAPI