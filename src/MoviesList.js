import './App.css';
import React, {useEffect} from 'react';
import Cards from './Cards.js';
const MoviesList = ({setCount,searchValue,moviesData,setData,setAllMovieData}) => {


    const apiUrl = "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies" ;
    // Function to fetch movie data from api 
    useEffect( () => {
    const fetchMovies = async() => 
    {
       const response = await fetch(apiUrl);
       const data = await response.json()
       setData(data)
       setAllMovieData(data)
       console.log(data)
       console.log("This is the fetch function!!")
    };

    fetchMovies();


    }, [setData,setAllMovieData]);
   

    const addtoWatchListHandle = (title) => 
        {
            alert(`'${title}' is added to watch list`);
            setCount( count => count + 1);
            
        }

           
    const watchnowHandle=(title)=>{
        //alert("you start watching"+title);
       
        const url="https://www.youtube.com/watch?v=Lt-U_t2pUHI"
        window.open(url, '_blank').focus()
    
   }
   return (

  

            
    <div className="card-container" style={{ display:"flex", border: "0px", justifyContent: "center", minHeight:"800px",  }}>
   
         {moviesData.map(movie => (<Cards data={movie} watchnowHandle={watchnowHandle} addtoWatchListHandle={addtoWatchListHandle} />))}
    
    </div>

    


   );
   
  
} 
export default MoviesList;