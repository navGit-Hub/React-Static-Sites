import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading]=useState(true);
  const [tours,setTours]=useState([]);
const removeTour=(id)=>{
 const newArray=tours.filter((tour)=>tour.id!==id);
 setTours(newArray);
}
  const getData=async ()=>{
   setLoading(true);
    try{
    const response= await fetch(url);
    const tours= await response.json();
    setTours(tours);
    setLoading(false);
  }
    catch(error){console.log(error);
    setLoading(true);
    }
  }
useEffect(()=>{
  getData();  
},[])
  if(loading)
   return (<main>
     <Loading/>
   </main>)
if(tours.length===0)
{
  return (<main>
    <div className="title">
    <h2>no tours left</h2>
    <button onClick={()=>getData()} className="btn">Refresh</button>
    </div>
  </main>);
}
  return (<main>
    <Tours tours={tours} removeTour={removeTour}/>
       </main>)
}

export default App
