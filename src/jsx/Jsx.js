import React from "react";
const Jsx = () => {
    // return(
    //     <div>
    //         <h1>Hello Jsx</h1>
    //     </div>
    // )

    return React.createElement(
        'h1',
        {id: 'header-tag', className: 'header-tag'},
        'HEllo 2jSx'
    )
}
export default Jsx