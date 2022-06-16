import {useLocation , useNavigate} from 'react-router-dom';

const Dashbord = () => {

    const location = useLocation();
    const navigate = useNavigate();

    return(
        <div>
            <div className="page-header">
                <h1>Dashbord</h1>
            </div>
            
            <h1 style={{color : "red"}}>hello {location.state}</h1>
            <button onClick={()=>{navigate('/')}}>Back </button>
        </div>
    )
}
   
export default Dashbord;