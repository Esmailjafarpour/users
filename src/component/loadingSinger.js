import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';


const loadingSinger = () => {
    
    return Array(6).fill({}).map(()=>{

        return(

            <h1>loading........</h1>

        )
    })
}

export default loadingSinger;