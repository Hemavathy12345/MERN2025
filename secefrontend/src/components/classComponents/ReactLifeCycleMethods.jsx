import React from 'react'
class ReactLifeCycleMethods extends React.Component {
    constructor(){
        super()
        this.state={
            number:0
        }
    }
    componentDidMount(){
        console.log("componentDidMount")
      

    }
    componentDidUpdate(prevProps,prevState){
      if(prevState.number!==this.state.number){
        console.log("componentDidUpdate",prevState.number,this.state.number)
      }

    }
    componentWillUnmount(){
        console.log("componentWillUnmount") 
       this.setState({number:0})
    }
    render(){
    
        return (
            <div>
                <h1>THIS IS A React Render LifeCycle</h1>
                <h2>{this.state.number}</h2>
                <button onClick={()=>this.setState({number:this.state.number+1})}>Increment</button>
            </div>
        )
    }
    }

export default ReactLifeCycleMethods