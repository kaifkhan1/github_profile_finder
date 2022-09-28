import React,{useState} from 'react';
import Cards from './Cards';
import Title from './Title';

function App(){

    const appData = []

    const[userData,setUserData] = useState([{
        name:'',
        phone:'',
        address:'',
        contactNo:''
    }]);

    function handleClick(){
        setUserData(()=>{
            return[
                {name:'Kaif',phone:'1234567890',address:'Jugsalai Street',contactNo:'0657'},
                {name:'Saif',phone:'123456789',address:'Jugsalai',contactNo:'0657'}
            ]
        })
    }



    return(
    <div>
    <Title/>
    <hr></hr>
    <div className='container'>
        {userData.map((value)=>{
            return(
                <Cards value={value} onClick={handleClick}/>
            )
        })}
        
        </div>
        </div>
    )

}

export default App;