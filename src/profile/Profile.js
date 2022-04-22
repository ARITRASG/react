import React from 'react'
/*functional component*/
// function Profile(prop){
//     return(
//         <div>
//             <h1>{prop.text.name}</h1>
//             <h1>{prop.data}</h1>
//         </div>
//     )
// }

/**
 * class component
 */
class Profile extends React.Component{
    render(){
        return(
            <div>
                <h1>{/* Hello class prop */}
                    {this.props.data}</h1>
                <h1>{this.props.text.name}</h1>
            </div>
        )
    }
}



export default Profile 
