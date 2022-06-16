import React from 'react';
// import ReactDOM from 'react-dom';
import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';
import About from './component/About';
import Dashbord from './component/Dashbord';
import Atlate from './component/Atlate';
import Artist from './component/Artist';
import Actor from './component/Actor';
import Singers from './component/Singers';
import Singer from './component/Singer';
import NotFound from './component/NotFound';
import {BrowserRouter as Router , Routes , Route , Navigate} from 'react-router-dom';
import Navbar from './component/Navbar';
import './App.scss';

 function App() {


  
  return (

    <Router>

        <Navbar/>

        <Routes>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Dashbord' element={<Dashbord/>}/>

            <Route path='/Atlate' element={<Atlate/>}/>
            <Route path='/Artist' element={<Artist/>}/>
            <Route path='/Artist/Singers' element={<Singers/>}/>
            <Route path='/Artist/Singers/:id' element={<Singer/>}/>

            {/* This method is for nested components */}
            {/* <Route path='/Artist' element={<Artist/>}>
                <Route path='Singer' element={<Singer/>}>
                    <Route path=':id' element={<Content/>}/>
                </Route> 

                <Route path='Actor' element={<Actor/>}>
                    <Route path=':id' element={<Content/>}/>
                </Route> 
            </Route> */}

            <Route path='/' element={<Home/>}/>

            <Route path='/not-found' element={<NotFound/>}/>

            <Route path="*" element={<Navigate to="/not-found" replace />}/>
                
        </Routes>

    </Router>
    
  );
}

export default App;
