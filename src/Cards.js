import React from 'react'
import './App.css';
const Cards = ({ data, watchnowHandle, addtoWatchListHandle}) => {
    return (

        <div className="card" style = {{width :'18rem', margin:"10px" , border:"10px", borderColor:"black"}}>
            <img src={data.Poster} style = {{width :'250px', height:"250px"}} className="card-img-top" alt={data.Title} />
            <div className="card-body">
                <h5 className="card-title">{data.Title}</h5>
                <p className="card-text">{data.Title}</p>
                <button className = "watchNow" onClick={()=>watchnowHandle(data.Title)} >Watch Now</button>
                <button className="watchLater" onClick = {()=>addtoWatchListHandle(data.Title)}>Add to WatchList</button>
        
            </div>
        </div>

    )
}

export default Cards