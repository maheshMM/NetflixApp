import React from 'react'
import './App.css';


const NetflixHomePage = ({ setData, watchLaterCount,searchValue,setSearch,SearchHandle,allMovieData,tglSrcGoBack,setTglSrcGoBack}) => {

  const goBackHandle = () => {
    setData(allMovieData);
    setTglSrcGoBack(false);
  };
  


  

  return (
      <>
      <h1>Hi, Mahesh</h1>
      <label style={{ position: 'relative', bottom: '10px', }} >Watch Later List Count : { watchLaterCount } </label>
      <div ClassName="srcSection">
          <input type="text" value={searchValue} onChange={(e)=>setSearch(e.target.value)}></input>
          <button className="searchbtn" onClick={SearchHandle}>Search</button>
          { tglSrcGoBack && ( <button className="goBack" onClick = {goBackHandle}>Go Back</button> )} 
      </div>
      </>
  )
}
 
export default NetflixHomePage