import React from 'react';


function Image(props){
    return(
        <img onClick={props.onClick} src='https://picsum.photos/100/100' alt='profile.jpg'></img>
    )
}

export default Image;