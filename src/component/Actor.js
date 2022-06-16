import {Outlet} from 'react-router-dom';

const Actor = () => {

    return(
        <>  
            <div className="page-header">
                <h1>Actor</h1>
            </div>
            
            <Outlet/>
        </>
    )   
   
}
   
   export default Actor;