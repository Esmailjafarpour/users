import {NavLink,useNavigate,Outlet} from 'react-router-dom';

const Artist = () => {

    const navigate = useNavigate();
    return(
        <>  
            <div className="page-header">
                <h1>Artist</h1>        
            </div>

            <button onClick={()=>{navigate('/')}}>Back</button>
            <div className="HomeTab">
                <button>
                    <NavLink  
                        style={({isActive})=>{return{color : isActive ? "blue":"black"}}}
                        to='/Artist/Actor'>
                            Actor
                    </NavLink>
                </button>

                <button>
                    <NavLink 
                        style={({isActive})=>{return{color : isActive ? "blue":"black"}}}
                        to='/Artist/Singers'>
                        Singer
                    </NavLink>
                </button>
            </div>

            <Outlet/>
        </>
    )   
   
}
   
   export default Artist;