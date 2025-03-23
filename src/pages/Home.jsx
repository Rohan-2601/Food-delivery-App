import React, { useState } from 'react';
import Nav from '../components/Nav';
import Category from '../Category';
import Card from '../components/Card';
import { food_items } from '../Food';
import { useContext } from 'react';
import { datacontext } from '../UserContext';
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2';
import { useSelector } from 'react-redux';

function Home() {
  let {cate, setCate,input, showCart, setShowCart}= useContext(datacontext)

  function filter(category) {
    console.log('Category selected:', category);
    if (category === 'All') {
      setCate(food_items);
    } else {
      const newList = food_items.filter((item) => item.food_category === category);
      setCate(newList);
    }
 
  }
  let items= useSelector(state=>state.cart)
  let subtotal=items.reduce((total,item)=>total+ item.qty*item.price,0);
  let deliveryFee= 20;
  let taxes= subtotal*0.5/100;
  let total=subtotal+deliveryFee+taxes


  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      {!input? <div className="flex flex-wrap justify-center gap-6 w-[100%]">
        {Category.map((item) => (
          <div
            key={item.name} 
            className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-700 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200"
            onClick={() => {
              console.log('Category clicked:', item.name);
              filter(item.name);
            }}
          >
            {item.image}
            {item.name}
          </div>
        ))}
      </div>:null}
      
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
       { cate.length>1? cate.map((item) => ( 
          <Card
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
            key={item.id}
          />
        )):<div className=' text-center text-2xl text-green-500 font-semibold p-5 ' > No dish found</div>}
        
      </div>
      <div className={` w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl transition-all duration-500 overflow-auto ${showCart?"translate-x-0": "translate-x-full"}`}>
        <header className='w-[100%] flex justify-between items-center p-6'>
          <span className=' text-green-500 text-[18px] font-semibold' >Order items</span>
          <RxCross2 className=' w-[20px] h-[20px] text-green-500 font-bold cursor-pointer hover:text-gray-600 ' onClick={()=>setShowCart(false)}/>

        </header>
        {items.length>0 ?<>
        <div className='w-full mt-9 flex flex-col gap-8'> 
       {items.map((item)=>(
        <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
        

       ))}
       </div>
       <div className='w-full border-t-2 border-b-2 border-gray-600 mt-7 flex-col gap-2 p-8'>
        <div className='w-full flex justify-between items-center  '>
          <span className='text-md text-gray-600 font-semibold'>Subtotal</span>
          <span className='text-green-400 font-semibold text-md'>Rs {subtotal}/-</span>
        </div>
        <div>
        <div className='w-full flex justify-between items-center  '>
          <span className='text-md text-gray-600 font-semibold'>Delivery Fee</span>
          <span className='text-green-400 font-semibold text-md'>Rs {deliveryFee}/-</span>
        </div>
        </div>
        <div><div className='w-full flex justify-between items-center  '>
          <span className='text-md text-gray-600 font-semibold'>Taxes</span>
          <span className='text-green-400 font-semibold text-md'>Rs {taxes}/-</span>
        </div></div>
       </div>
       <div>
       <div className='w-full flex justify-between items-center p-9 '>
          <span className='text-2xl text-gray-600 font-semibold'>Total</span>
          <span className='text-green-400 font-semibold text-2xl'>Rs {total}/-</span>
        </div>
        <div className=' flex justify-center'>
        <button  className='w-[80%] p-3 bg-green-300 rounded-lg text-gray-700 hover:bg-green-400 transition-all cursor-pointer '>Place Order</button>
        </div>
        
       </div>
       </>: <div className='text-center text-2xl text-green-500 font-semibold p-5'>Empty Cart</div>}
        
      </div>
    </div>
  );
}

export default Home;
