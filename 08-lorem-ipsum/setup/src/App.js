import React, { useState } from 'react';
import data from './data';
function App() {
  const [count,setCount]=useState(0);
  const [text,setText]=useState([]);

  const handleSubmit=(event)=>{
    event.preventDefault();
let amount=parseInt(count);
    if(amount<=0)
     amount=1;
    else if(amount>8)
     amount=8;
    setText(data.slice(0,amount));
  };
  return (
    <section className="section-center">
     <h3>lorem ipsum is boring!</h3>
     <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">
       paragraphs:
      </label>
      <input type="number" name="amount" id="amount"
      value={count} onChange={(event)=>setCount(event.target.value)}/>
     <button className="btn" type="submit">generate</button>
     </form>
    <article className="lorem-text">
     {text.map((item,index)=>{
       return <p key={index}>{item}</p>
     })}
    </article>
    </section>
  )
}

export default App;
