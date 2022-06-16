import {useState , useEffect} from 'react';
import axios from "axios";
import {useParams, Link} from 'react-router-dom';
import NotFound from './NotFound';
import loadingSinger from './loadingSinger';

const Singer = () => {

    const {id} = useParams();
    const [singer , setSinger] = useState({});
    const [loading , setLoading] = useState(true);
    const [notFound , setNotFound] = useState(false);

    useEffect(()=>{
        
        const response = axios
        .get(`https://reqres.in/api/users/${id}`)

        .then((response)=>{
            setSinger(response.data.data);
            setLoading(false);
        })
        .catch((error)=>{
            setNotFound(true)
            setLoading(false)
        })

    },[])

    return(

        <div className="page-header">  
            {loading  ?

                <div className="page-header">
                     <loadingSinger/>
                </div>
                : 
                (notFound ? 
                    <NotFound/> 
                    :  
                    <div key={singer.id} className="col-4 text-center p-5">
                        <img
                            src={singer.avatar}
                            style={{borderRadius:"50%" ,width:"100px"}}
                            alt="actor"
                        />
                        <Link to={`/Artist/Singer/${singer.id}`} >
                            <h4>
                                {singer.first_name} {singer.last_name}
                            </h4>
                        </Link>

                        <h5>{singer.email}</h5>

                        <div className="row">
                            <div className="col-6">
                                <button
                                    className="btn btn-info btn-sm"
                                    // onClick={()=>{handleUpdate()}} 
                                >
                                    update
                                </button>
                            </div>
                            <div className="col-6">
                                <button
                                    className="btn btn-info btn-sm"
                                    // onClick={()=>{handleDelete()}} 
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

        
       </div>
    )   
   
}
   
export default Singer;