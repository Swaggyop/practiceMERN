import React, { useState } from 'react';

const AddProductForm = ({ onProductAdded }) => {
  const [formData, setFormData] = useState({ name: '', price: '', image: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', price: '', image: '' });
        setTimeout(() => setSuccess(false), 3000);
        if (onProductAdded) onProductAdded();
      }
    } catch (err) {
      console.error("Failed to add product", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg border border-indigo-50">
      <h2 className="text-2xl font-bold text-indigo-900 mb-6">Add New Product</h2>
      {success && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">✅ Product added successfully!</div>}
      
      <div className="space-y-4">
        <input 
          type="text" placeholder="Product Name" required
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 outline-none"
          value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input 
          type="number" placeholder="Price" required
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 outline-none"
          value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})}
        />
        <input 
          type="text" placeholder="Image URL" required
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 outline-none"
          value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})}
        />
        <button 
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          {loading ? "Saving..." : "Save Product"}
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;