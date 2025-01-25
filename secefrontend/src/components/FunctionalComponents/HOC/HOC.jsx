import Button from './Button'
import trackingButtonComponents from './trackingButtonComponents'
const HOC =(name)=>{
    const ButtonTracking=trackingButtonComponents(Button)
    return(
        <div>
            <h1>This is HOC Example</h1>
            <button name="Login"/>
            <ButtonTracking trackingInfo={name}/>
        </div>
    )
}
export default HOC