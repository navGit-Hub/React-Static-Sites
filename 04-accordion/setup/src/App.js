import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

return (<main className="container">
{
 data.map(({id,title,info})=>{
  return <SingleQuestion key={id} question={title} info={info}/>
 })
}

</main>)

  
}

export default App;
