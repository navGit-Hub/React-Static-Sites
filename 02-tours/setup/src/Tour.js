import React, { useState } from 'react';

const Tour = ({name,price,image,info,removeTour,id})=>{
  const [readMore,setReadMore]=useState(false);
  return (<article className="single-tour">
       <img src={image} alt={name}/>
       <footer>
         <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
        </div>
        <p>{readMore?`${info}`:`${info.slice(0,200)}`}
        <button  className="btn" onClick={()=>setReadMore(!readMore)}>Read More</button></p>
       </footer>
       <button className='delete-btn' onClick={()=>removeTour(id)}>Not interested</button>
  </article>)
};

export default Tour;
