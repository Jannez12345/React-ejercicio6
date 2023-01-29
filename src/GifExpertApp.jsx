//import React from 'react'
import { useState } from "react";
import { AddCategory,GifGrid } from "./components/Index";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch','dragon ball' ]);
    //metodo onAddCategory
    const onAddCategory =(newCategory)=>{
      if(categories.includes(newCategory)) return;
      setCategories([newCategory,...categories]);
     
       

    }
    console.log(categories);
  return (
    <>
    
     <h1>Gift expert</h1>
     <br></br>
     <h2>Ejercicio Jannez urrego - prueba en produccion 2023</h2>
     <br></br>
    
    <AddCategory 
    onNewCategory ={(value) => onAddCategory(value)}
       /> 
         
 
        {            
       
       categories.map( (category) =>( 
        <GifGrid  
        key={category}  
        category ={category}  />
        ))
       }            
    </>
  )
}
