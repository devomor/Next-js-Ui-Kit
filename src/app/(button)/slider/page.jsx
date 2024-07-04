"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
const ButtonPage = () => {
  const list =[
    "/be.png",
    "/x.png",
    "/instragram.png",
    "/Logo.png",
  ];
   const [count, setCount] = useState(0);
    useEffect(() => {
    const interval = setInterval(() => {
   setCount(prevCount => (prevCount === list.length - 1 ? 0 : prevCount + 1));
    
    }, 3000);
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [list.length]);

  const increment = () => {
   if(count < list.length -1){
     setCount(prevCount => prevCount + 1);
   }
  };

  const decrement = () => {
    if(count > 0){
    setCount(prevCount => prevCount - 1);
    }
    
  };
  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      increment();
    } else {
      decrement();
    }
  }
    return (
        <div onWheel={handleWheel} className="p-3">
          <div className=' h-96 bg-neutral-500 flex justify-between items-center text-center content-center '>
           <button onClick={decrement}>  <FaArrowRight /></button>
           <Image width={400} height={200} src={list[count]} />
           <button onClick={increment}>  <FaArrowRight /></button>
          </div>
           
          <div className="flex flex-row items-center justify-center">
        {list.map((item, index) => (
          <div
            key={index}
            className={`h-5 w-5 rounded-full mx-1 ${
              count === index ? 'bg-blue-500' : 'bg-slate-400'
            }`}
          ></div>
        ))}
      </div>

            
        </div>
    );
}

export default ButtonPage;
