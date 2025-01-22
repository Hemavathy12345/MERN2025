import { useEffect, useState } from "react"
import axios from "axios"
const UseEffectAPI = () => {
    var [post, setPost] = useState([]);
    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then((res) =>{ console.log(res.data);
         setPost(res.data)}).catch((err) => console.log(err))

    }, [])
    return (
        <div>
            <h1>This is useEffect API Example</h1>
            <h3>The content inside ny JSONPlaceholder API post</h3>
            <ul>
                {post.map((post) => (
                    <li key={post.id} style={{ listStyle: "none" }}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default UseEffectAPI