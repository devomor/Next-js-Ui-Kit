"use client"
import { useState } from "react";
const counterPage = () => {
    const [count,setCount] =useState(0); 

    const increment =()=>{
        setCount(preCount => preCount +1);
    }
     const decrement =()=>{
        setCount(preCount => preCount -1);
    }

    return (
        <div className=' bg-slate-300 pt-10 flex flex-col justify-center items-center min-h-screen'>
         
             <h1 className=" text-[100px]">{count}</h1>
                <div className='flex gap-10'>
                    <button onClick={decrement} className='bg-orange-500 p-3 rounded-sm'>Decrement</button>
                    <button onClick={increment} className=' bg-red-500 p-3 rounded-sm'>increment</button>
                </div>
            
        </div>
    );
}

export default counterPage;
