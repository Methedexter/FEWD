import React from "react";
class ReactLifeCycle extends React.Component{
   constructor(props){
    super(props);
    this.state = {
        count : 0
    };
    console.log("Constructor : Componenent is initialised");
   }
   componentDidMount(){
    console.log("Mount : Component is mounted");
   }
   componentDidUpdate(){
    console.log(`Update : Count is updated to ${this.state.count}`);
   }
   componentWillUnmount(){
    console.log("Unmount : Component is unmounted");
   }

   render(){
    return(
        <>
        {}
        <p>Count:{this.state.count}</p>
        <button onClick={() => this.setState({count : this.state.count+1})}>increment</button>
        </>
    )
   }
}
export default ReactLifeCycle;