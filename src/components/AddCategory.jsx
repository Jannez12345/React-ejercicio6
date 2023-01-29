import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
const [inputValue, setInputValue]=useState('');

//funcion onInputChange

const onInputChange =({target})=>{
  //console.log(event.target.value);
  setInputValue(target.value);
}
//funcion boton
const onSubmit = (event)=>{
  
  event.preventDefault();
  if(inputValue.trim().length<=1) return;
  //console.log(inputValue);
 // setCategories(categories => [inputValue,...categories]);
 setInputValue('');
 onNewCategory (inputValue.trim());
  
}

return (
 <form onSubmit={onSubmit}>
<input 
  type="text" 
   placeholder="Buscar Gift"
   value={inputValue}
   onChange={onInputChange}
   
   />

 </form>
 
   
  )
}
