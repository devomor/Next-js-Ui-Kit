"use client"
import GrideComponent from "@/components/gride_component";
import { useEffect, useState } from 'react';
const GridePage = () => {
 const [grideItems, setGrideItems] = useState([]);
      useEffect(() => {
    const fetchGrideItems = async () => {
      try {
        const {grideData} = await import('../../../models/gride_model.js');
        setGrideItems(grideData);
      } catch (error) {
        console.error('Error fetching navbar items:', error);
      }
    };

    fetchGrideItems();
  }, []);

    return (
       <div className="flex flex-wrap gap-4 justify-center">
         {grideItems.map(items=>(
            <GrideComponent 
            key={items.id} 
            title={items.title} 
            description={items.description} 
            />
         ))}
       </div>

      
    );
}

export default GridePage;
