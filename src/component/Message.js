import React, {
    Component
} from 'react'
//import React from 'react'
//state...
//class Message extends React.Component{
class Message extends Component {
    constructor(){
        super();
        this.state = {
            message: 'welcome visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    //render method
    render() {
        return ( 
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>  
            </div>
        )
    }
}

export default Message