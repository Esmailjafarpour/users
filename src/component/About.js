import {useNavigate} from 'react-router-dom';

const About = () => {

    const navigate = useNavigate();

    return(

        <>
        <div className="page-header">
            <h1>About</h1>
        </div>
         <button onClick={()=>{navigate('/')}}>Back </button>
        </>
    )   
   
}
   
export default About;