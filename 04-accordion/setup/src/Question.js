import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({question,info}) => {
const [disp,setDisp]=useState(true);

  return (<article className="question">
    <h4>{question}</h4>
    <button className="btn" onClick={()=>setDisp(!disp)}>{disp?<AiOutlinePlus/>:<AiOutlineMinus/>}</button>
    {!disp && <p>{info}</p>}
  </article>)
};

export default Question;
