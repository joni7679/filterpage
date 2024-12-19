import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Card from './Components/Card/Card';
import axios from 'axios';
import { ProductsContext } from './utils/Context/Context';

function App() {
    const { products, setProducts } = useContext(ProductsContext);
    const [categories, setCategories] = useState([]);
    const [catname, setCatname] = useState('');

    // Fetch Categories
    const fetchCategories = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/categories`);
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    // Fetch Products by Category
    const fetchProducts = async (category) => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`).then((response)=>{
              setProducts(response.data);

            });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (catname) {
            fetchProducts(catname );
            console.log(catname);
            
        }
    }, [catname]);

    return (
        <div className="w-full flex items-start justify-start gap-3">
            <Sidebar categories={categories} setCatname={setCatname} />
            <div className="p-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 h-screen overflow-y-scroll products-card">
                <Card />
            </div>
        </div>
    );
}

export default App;
