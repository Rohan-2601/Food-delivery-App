import React from 'react'
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../Redux/CartSlice';
import { Toast } from 'react';
function Card({name,image,id,price,type}) {
  let dispatch= useDispatch();
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 flex flex-col gap-3 shadow-lg hover:border-2 border-green-700'>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
        <img src={image} alt=""  className=' object-cover'/>

      </div>
      <div className=' text-2xl font-semibold'>
      {name}
      </div>
      <div className='w-full flex justify-between'>
        <div className=' text-lg font-bold text-green-500'>{price}/-</div>
        <div className=' flex justify-center items-center gap-3 text-lg text-green-500 font-semibold '>{type} <span> { type==="veg"?<LuLeafyGreen />:<GiChickenOven />} </span></div>

      </div>
      <div>
  <button 
    className='w-full p-3 bg-green-300 rounded-lg text-gray-700 hover:bg-green-400 transition-all cursor-pointer'
    onClick={() => {
      dispatch(AddItem({id: id, name: name, price: price, image: image, qty: 1}));
      Toast("item added");
    }}
  >
    Add to dish
  </button>
</div>
      
    </div>
  )
}

export default Card
