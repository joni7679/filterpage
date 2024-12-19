import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../utils/Context/Context';

export default function Card() {
    const { products } = useContext(ProductsContext);

    return (
        <>
            {(!products || products.length === 0) ? (
                <h1>Loading..........</h1>
            ) : (
                products.map((product, i) => (
                    <Link
                        key={i}
                        to={`/productDetails/${product.id}`}
                        className="card max-w-sm shadow-lg border-spacing-1 border-gray-300 p-5 rounded"
                    >
                        <div className="img-container w-full h-[200px] overflow-hidden">
                            <img
                                className="w-full h-full object-contain hover:scale-125 duration-300 transition-all"
                                src={product.image}
                                alt={product.title}
                            />
                        </div>
                        <p>{product.title}</p>
                    </Link>
                ))
            )}
        </>
    );
}
