import { useState, useEffect } from 'react';
import axios from 'axios';
import {Outlet,Link} from 'react-router-dom';
import loadingSinger from './loadingSinger';
import Delete from './Delete';


const Singers = () => {

    const [singers,setSingers] = useState([]);
    const [loading , setLoading] = useState(true);
    const [id , setId] = useState(0);
    const [ModalDelete , setModalDelete] = useState(false);
    const [ModalUpdate , setModalUpdate] = useState(false);

    const [name , setName] = useState('');
    // const [ModalUpdate , setModalUpdate] = useState(false);


    useEffect(() => {

        getSingers();

    },[]);

    // const [notFound , setNotFound] = useState(false);

    // useEffect( () => {

    //     console.log("useEffect Singer");

    //     const response = axios
    //         .get('https://reqres.in/api/users')
    //         .then((response)=>{
    //             setSingers(response.data.data)
    //         })
    //         .catch((error)=>{
            
    //         });

    // },[]);

    const getSingers = async () =>{
        const response = await axios
        .get('https://reqres.in/api/users');
        // console.log("response",response)
        setSingers(response.data.data);
        setLoading(false)
    }

    let handleCreate = async()=>{
        const newSinger = {
            id : singers.length+1,
            first_name: "mohamad",
            last_name: "seyedAghaie",
            email: "mohamadhosein20000@gmail.com",
            avatar:
              "http://neonlearn.ir/uploads/images/users/1587741072106-photo_2018-09-25_21-36-49.jpg",
        };

          const response = await axios.post("https://reqres.in/api/users",newSinger);
          setSingers([...singers,newSinger])
    }

    let handleId = (id) => {
        setId(id)
        setModalDelete(true)
        console.log(id)
    }

    let handleDelete = async (id) =>{
        setModalDelete(false);
        let response = await axios
        .delete(`https://reqres.in/api/users/${id}`)
        
        const newsingers = singers.filter((q)=>{

            return q.id !== id
        })

        setSingers(newsingers)
        
    }

    let handleUpdate = async (singer) =>{

        singer.first_name =`${name}`;
        singer.last_name = "jafarpour";
        singer.email = "esmailjafarpour29@gmail.com";

        const updateSinger = [...singers];
        const indexSinger = updateSinger.indexOf(singer);
        updateSinger[indexSinger] = {...singer};
        setSingers(updateSinger);
        const response = await axios.post("https://reqres.in/api/users",Singers);
         
    }

    let handleChangeName = (e) => {
        setName(e.target.value)
        console.log(e.target.value)
    }

    return(

        <div className="page-header">

            {loading ? 

                <div className="page-header">
                    <loadingSinger/>
                </div>

                :

                <div className="content col-11">

                    <div className="page-header col-12 m-2">
                        <h1>Singers</h1>
                        <button className="btn btn-success btn-sm" onClick={handleCreate}>AddSinger</button>
                    </div>

                    <div className="row users col-12">

                        {singers.map((singer)=>{
    
                                return(

                                    <>

                                        {ModalDelete ? 

                                            <div className="Modal">
                                                <div className="Modal-content">
                                                    <h4>Are you sure you want to delete it?</h4>
                                                    <div className="Modal-content-button">
                                                        <button onClick={()=>{handleDelete(id)}} className="btn btn-danger btn-sm">yes</button>
                                                        <button onClick={()=>{setModalDelete(false)}} className="btn btn-info btn-sm">No</button>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            null
                                        }

                                        {ModalUpdate? 

                                            <div className="Modal">
                                                <div className="Modal-content">
                                                    <h4>You are updating your user information</h4>
                                                    <form>
                                                        <div class="form-group">
                                                            <label for="exampleInputEmail1">name</label>
                                                            <input type="text" value={name} class="form-control" onChange={handleChangeName}/> 
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="exampleInputEmail1">family</label>
                                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="exampleInputEmail1">Email </label>
                                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                                        </div>
                                                        <button type="submit" onClick={handleUpdate} class="btn btn-primary">send</button>
                                                        {/* <button type="button" onClick={setModalUpdate(false)} class="btn btn-primary">cancel</button> */}
                                                    </form>
                                                </div>
                                            </div>

                                            :

                                            null

                                        }

                                        <div key={singer.id} className="user col-3 text-center">
                                            <img
                                                src={singer.avatar}
                                                style={{borderRadius:"50%" ,width:"100px"}}
                                                alt="actor"
                                            />
                                            <Link to={`/Artist/Singers/${singer.id}`} >
                                                <h4>
                                                    {singer.first_name}{singer.last_name}
                                                </h4>
                                            </Link>
            
                                            <h5>{singer.email}</h5>
            
                                            <div className="user-button">
                                                <div className="col-6">
                                                    <button
                                                        className="btn btn-info btn-sm"
                                                        onClick={()=>{setModalUpdate(true)}} 
                                                    >
                                                        update
                                                    </button>
                                                </div>
                                                <div className="col-6">
                                                    <button
                                                        className="btn btn-info btn-sm"
                                                        onClick={()=>{handleId(singer.id)}} 
                                                    >
                                                        Delete
                                                    </button>
                                                    {/* <button
                                                        className="btn btn-info btn-sm"
                                                        onClick={()=>{handleDelete(singer)}} 
                                                    >
                                                        Delete
                                                    </button> */}
                                                    {/* <Delete/> */}
                                                </div>
                                            </div>
                                        </div>

                                    </>

                                )
                            })
                        }
                        
                    </div>
                </div>
               
            }
            
            <Outlet/>
        </div>
    )   
   
   }
   
   export default Singers;