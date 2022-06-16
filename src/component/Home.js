import {useEffect} from "react";
import {NavLink,useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    
    // useEffect(()=>{
    //     navigate('/Dashbord')
    // },[])
    
 return(

    <div>

        <button onClick={()=>{navigate('/Dashbord',{state : 'mohammad'})}}>Dashbord</button>

        <div className="px-2 HomeTab">
            <button onClick={()=>{navigate('/Atlate',{state : 'mohammad'})}}>Atlate</button>
            <button onClick={()=>{navigate('/Artist',{state : 'mohammad'})}}>Artist</button>
        </div> 

    </div>

 )   

}

export default Home;