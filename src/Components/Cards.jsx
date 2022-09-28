import React,{useState} from 'react';
import Heading from './Heading';
import Image from './Image';

function Cards(props){
    return(
        <div className='card-body'>
            <Image onClick={props.onClick}/>
            <Heading value={props.value.name}/>
            <Heading value={props.value.phone} />
            <Heading value={props.value.address} />
            <Heading value={props.value.contactNo} />
        </div>
    )
}

export default Cards;