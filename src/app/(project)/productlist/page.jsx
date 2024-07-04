"use client"
import { useEffect, useState } from "react";
const ProductListPage = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
         {product.map((item) => (
                <h1 key={item.id}>{item.title}</h1>
            ))}
            
        </div>
    );
}

export default ProductListPage;
