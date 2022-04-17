import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import Component from './component';
function App() {
 
  const [people,setPeople]=useState(data);
  const [index,setIndex]=useState(0);
  useEffect(()=>{
let last=people.length-1;
if(index<0)
setIndex(last);
if(index>last)
setIndex(0);
  },[people,index])
  useEffect(()=>{
let interval=setInterval(()=>{
setIndex(index+1);
},3000);
return ()=>clearInterval(interval);
  },[index])
  return <Component/>
}

export default App;
