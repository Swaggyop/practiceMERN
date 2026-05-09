import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  if (loading) return <div className="text-center py-10 font-medium text-indigo-600">Loading inventory...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.length > 0 ? (
        products.map((p, idx) => <ProductCard key={idx} product={p} />)
      ) : (
        <p className="col-span-full text-center text-gray-500">No products found. Add some!</p>
      )}
    </div>
  );
};

export default ProductList;