import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage=()=>{
let list=localStorage.getItem('list')
if(list)
{
  return JSON.parse(localStorage.getItem('list'))
}
else{
  return [];

}
}
function App() {
  const [name,setName]=useState('');
  const [list,setList]=useState(getLocalStorage());
  const [editId,setEditId]=useState(null);
  const [isEditing,setIsEditing]=useState(null);
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list));
  })
  const handleSubmit=(e)=>{
e.preventDefault();
if(!name)
{
  //display alert
  showAlert(true,'Enter a valid value!','danger');
}
else if(name && isEditing)
{
  //handles edit
  setList(list.map((item)=>{
   if(item.id===editId)
      return {...item,title:name};
      return item;
  }))
  showAlert(true,'Added Sucessfully!','success');
setName('');
setEditId(null);
setIsEditing(false);
}
else{
  showAlert(true,'Successfully Added!','success');
  const newItem={id:new Date().getTime().toString(),title:name};
  setList([...list,newItem]);
  setName('');
}
  }
  const showAlert=(show=false,msg='',type='')=>  {
    setAlert({show,msg,type});
  }
  const clearItems=()=>{
    showAlert(true,'Cleared All Items!','success');
    setList([]);
  }
  const [alert,setAlert]=useState({show:false,msg:'',
  type:''});
  const removeItem=(id)=>{
      showAlert(true,'Removed from the List!','danger');
    setList(list.filter((item)=>item.id!==id));}
    const editItem=(id)=>{
      const specificItem=list.find((item)=>item.id===id);
      setIsEditing(true);
      setEditId(id);
      setName(specificItem.title);
    }
  return <section className="section-center">
    <form className='grocery-form' onSubmit={handleSubmit}>
     {alert.show && <Alert {...alert} list={list} removeAlert={showAlert} />}
     <h3>grocery bud</h3>
     <div className='form-control'>
     <input type="text" value={name} onChange={(e)=>setName(e.target.value)}
     placeholder="eg.carrot"/>
     <button type='submit' className='submit-btn'>
       {isEditing?'edit':'submit'}
     </button>
   </div>
    </form>
    { list.length>0 &&
    (<div className="grocery-container">
      <List items={list} removeItem={removeItem} editItem={editItem}/>
      <button className="clear-btn" onClick={clearItems}>clear items</button>
    </div>)}
  </section>
}

export default App
