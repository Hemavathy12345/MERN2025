const Gallery = (sece)=>{
    return (
        <div  style={{ textAlign: "center" }}>
            <h2>THIS IS A {sece.page}Page</h2>
            <img src="./src/assets/logo.jpg" alt="sece logo"/>
            <h1>The image is {sece.image}</h1>
        </div>
    )
}
export default Gallery