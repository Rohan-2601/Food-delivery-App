import React, { useState } from 'react'
import Nav from '../components/Nav'
import Category from '../Category'
import Card from '../components/Card'
import { food_items } from '../Food'

function Home() {
  let[cate,setCate]=useState(food_items);
  function filter(category) {
    console.log("Category selected:", category);  
    if (category === "All") {
      setCate(food_items);  
    } else {
      const newList = food_items.filter((item) =>
        (item.food_category=== category ) 
      );
      setCate(newList);  
    }
  }
  
 
  
  return (
    <div className=' bg-slate-200 w-full min-h-screen'>
      <Nav/>
      <div className='flex flex-wrap justify-center gap-6 w-[100%]'>
        {Category.map((item)=>{
          return (
            <div className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-700 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200' onClick={() => {
              console.log("Category clicked:", item.name);  // Check if onClick is triggered
              filter(item.name);  // Trigger filter
            }} >
              
               {item.image}
               {item.name}
            
             </div>

          )
          
        }
        


        )}
      </div>
      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
     {food_items.map((item)=>(
      <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} key={item.id}/>
     )
    )}
        
      </div>
    </div>
  )
}

export default Home
