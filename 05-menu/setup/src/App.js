import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const category=['all',...new Set(items.map(({category})=>category))];
function App() {
  const [menuItems,setMenuItems]=useState(items);
  const [catg,setCatg]=useState(category);
const filterItems=(cat)=>{
if(cat==='all')
   {
     setMenuItems(items);
     return;
   }
  const temp=items.filter(({category})=>category===cat)
  setMenuItems(temp);
}
return(<main>
     <section className="menu section">
    <div className='title'>
       <h2>our menu</h2>
       <div className="underline"></div>
    </div>
    <Categories filterItems={filterItems} catg={catg}/>
    <Menu items={menuItems}/>
     </section>
     </main>
); 
    }
     
export default App;
