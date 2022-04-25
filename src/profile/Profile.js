import React from 'react'
/*functional component*/
const Profile =  (props) =>{
    // console.log(prop);
    return(
        <div>
            <h1>{props.name} {props.data}</h1>
            {props.childern}
            {/* <h1>{prop.data}</h1> */}
        </div>
    )
}

/**
 * class component
 */
// class Profile extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>{/* Hello class prop */}
//                     {this.props.data}</h1>
//                 <h1>{this.props.text.name}</h1>
//             </div>
//         )
//     }
// }



export default Profile 
