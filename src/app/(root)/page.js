"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
export default function Home() {
    const [navbarItems, setNavbarItems] = useState([]);
   useEffect(() => {
    const fetchNavbarItems = async () => {
      try {
        const {navbardata } = await import('../../models/navbar_model.js');
        setNavbarItems(navbardata);
      } catch (error) {
        console.error('Error fetching navbar items:', error);
      }
    };

    fetchNavbarItems();
  }, []);
  return (
    <div className='p-4'>
      <h1 className='bg-[rgb(208,178,178)] h-10 shadow-lg text-center text-3xl font-mono rounded-2xl'>Next Js UI Kit</h1>
        {navbarItems.map(item => (
           <div key={item.id}
           className='
          bg-[rgb(208,178,178)] 
            flex
            my-5
            h-10
            px-7  
            shadow-lg 
            text-2xl 
            font-inter 
            rounded-2xl 
            content-center
            text-slate-800
            justify-between
            items-center
            '
            > {item.id} {item.nav_name} 
            <Link href={item.route}>
             <FaArrowRight />
            </Link>
             
             </div>
        ))}
    </div>
  
  );
}
