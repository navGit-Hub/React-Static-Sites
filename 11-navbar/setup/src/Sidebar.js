import React from 'react';
import {links,social} from './data';

function Sidebar(){
return (
<>
<h4>Sidebar</h4>
<div className="links-container show-container">
      <ul className="links">
        {links.map(({id,url,text})=>{
         return (
          <li key={id}>
            <a href={url}>{text}</a>
          </li>
         )
         })}
         </ul>
         <ul className="social-icons">
        { social.map(({id,url,icon})=>{
          return <li key={id}>
            <a href={url}>{icon}</a>
          </li>

        })

        }
      </ul> 
      </div>
      </>)

}
export default Sidebar;