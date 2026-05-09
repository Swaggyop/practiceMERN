import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';

function App() {
  const [view, setView] = useState('home'); // 'home' or 'add'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-indigo-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">OdooManage 🚀</h1>
          <div className="space-x-4">
            <button 
              onClick={() => setView('home')} 
              className={`px-4 py-2 rounded-md transition ${view === 'home' ? 'bg-indigo-700' : 'hover:bg-indigo-800'}`}
            >
              Inventory
            </button>
            <button 
              onClick={() => setView('add')} 
              className={`px-4 py-2 rounded-md transition ${view === 'add' ? 'bg-indigo-700' : 'hover:bg-indigo-800'}`}
            >
              + Add Product
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {view === 'home' ? (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h2>
            <ProductList />
          </div>
        ) : (
          <div className="mt-10">
            <AddProductForm onProductAdded={() => setView('home')} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;