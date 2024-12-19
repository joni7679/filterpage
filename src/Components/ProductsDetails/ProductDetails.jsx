import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductDetails() {
    const [singleProduct, setSingleProduct] = useState(null);
    const { id } = useParams();

    const fetchSingleProduct = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setSingleProduct(res.data);
            console.log(res.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    useEffect(() => {
        fetchSingleProduct();
    }, [id]);

    if (!singleProduct) {
        return <div className="text-center p-5 font-semibold">Loading...</div>;
    }

    return (
        <>
            <Link to={`/`} className='text-xl  px-3 py-2 rounded bg-blue-600 text-white mt-5 mx-5'>Back</Link>
            <div className="p-5 h-screen flex items-center justify-center">
                <div className="card w-1/2 p-5 shadow-lg rounded-lg grid md:grid-cols-2 sm:grid-cols-1 gap-3 ">
                    <div className="img-container w-full h-[200px] ">
                        <img
                            className="w-full h-full object-contain"
                            src={singleProduct.image}
                            alt={singleProduct.title}
                        />
                    </div>
                    <div className="details">
                        <p className="font-semibold">{singleProduct.title}</p>
                        <p className="text-red-500">Price: ${singleProduct.price}</p>
                        <p className='font-semibold'>Category: {singleProduct.category}</p>
                        <p className='mt-5 text-gray-500'>{singleProduct.description?.slice(0, 50)}...</p>
                        <div className="flex gap-2 mt-5">
                            <button className="cursor-pointer px-[25px] py-[10px] outline-none border-[1px] border-spacing-2 border-cyan-500 rounded ">
                                Edit
                            </button>
                            <button className="cursor-pointer px-[25px] py-[10px] outline-none border-[1px] border-spacing-2 border-red-500 rounded ">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}

export default ProductDetails;
