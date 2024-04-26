import React,{Component} from 'react'


class Counter extends Component{
    state ={count:0}

    onIncrement=() =>{
        this.setState((prevState) => ({count: prevState.count + 1 }))
        
    }
    onDecrement=() =>{
        this.setState((prevState) => ({count: prevState.count - 1 }))
      
    }
    onReset=() =>{
        this.setState({count:0})
    }


    render(){
        const {count}=this.state;
        return(
            <div>
            <h1> Count {count}</h1> 
            <button onClick={this.onIncrement}>
                Increase
            </button>
            <button onClick={this.onDecrement}>
                Decrease
            </button>
            <button onClick={this.onReset}>
                Reset
            </button>
            </div>
        )
    }
}
export default Counter;