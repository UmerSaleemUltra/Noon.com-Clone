import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-yellow-400 p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">noon</div>
        <div>Deliver to <span className="font-bold">Dubai</span></div>
        <input type="text" placeholder="What are you looking for?" className="px-4 py-2 rounded" />
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Log In</button>
          <button className="bg-gray-200 text-black px-4 py-2 rounded">Wishlist</button>
          <button className="bg-gray-200 text-black px-4 py-2 rounded">Cart</button>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-white p-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700">All Categories</a>
          <a href="#" className="text-gray-700">Electronics</a>
          <a href="#" className="text-gray-700">Men's Fashion</a>
          <a href="#" className="text-gray-700">Women's Fashion</a>
          <a href="#" className="text-gray-700">Home</a>
          <a href="#" className="text-gray-700">Beauty & Fragrance</a>
          <a href="#" className="text-gray-700">Baby</a>
          <a href="#" className="text-gray-700">Toys</a>
          <a href="#" className="text-gray-700">Sports</a>
        </div>
        <div className="text-sm bg-yellow-400 p-1 rounded">Free Delivery</div>
      </nav>

      {/* Main content */}
      <main className="p-4">
        {/* Banner */}
        <div className="bg-blue-200 p-4 mb-4 rounded">
          <div className="text-center mt-2">
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/7b7c1cda-86ee-4d36-97b9-c5b1917ae35f.gif?format=avif" alt="" />
            <h2 className="text-xl font-bold">Protect Your Skin</h2>
            <p>With the #1 suncare brand in the UAE</p>
            <button className="bg-orange-500 text-white px-4 py-2 mt-2 rounded">Buy 1 Get 1</button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex space-x-4 overflow-x-auto">
          <div className="flex-shrink-0 bg-white p-4 rounded shadow">
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/3edcabc8-b14e-4994-bbf1-acea4b345fc7.png?format=avif" alt="Deals" className="w-16 h-16 mx-auto" />
            <p className="text-center mt-2">Deals</p>
          </div>
          <div className="flex-shrink-0 bg-white p-4 rounded shadow">
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/b4ad5b4c-36e4-40f0-a34e-de1d1f17dce2.png?format=avif" alt="Home & Kitchen" className="w-16 h-16 mx-auto" />
            <p className="text-center mt-2">Home & Kitchen</p>
          </div>
          <div className="flex-shrink-0 bg-white p-4 rounded shadow">
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/acc7429e-80ac-48b4-9bc3-235382474281.png?format=avif" alt="Electronics" className="w-16 h-16 mx-auto" />
            <p className="text-center mt-2">Electronics</p>
          </div>
          <div className="flex-shrink-0 bg-white p-4 rounded shadow">
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/0e212554-186c-4d97-806c-a4e7895e6ff2.png?format=avif" alt="Furniture" className="w-16 h-16 mx-auto" />
            <p className="text-center mt-2">Furniture</p>
          </div>
          <div className="flex-shrink-0 bg-white p-4 rounded shadow">
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/e9a62a9e-035a-4102-ae93-3a981e30ed08.png?format=avif" alt="Kitchen & Dining" className="w-16 h-16 mx-auto" />
            <p className="text-center mt-2">Kitchen & Dining</p>
          </div>
          <div className="flex-shrink-0 bg-white p-4 rounded shadow">
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/72369b5d-ac88-480c-9a6c-3ed510c719a9.png?format=avif" alt="Men's Fashion" className="w-16 h-16 mx-auto" />
            <p className="text-center mt-2">Men's Fashion</p>
          </div>
          <div className="flex-shrink-0 bg-white p-4 rounded shadow">
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/b3ca26bc-f419-4f9e-9082-0ec6c641d154.png?format=avif" alt="Women's Fashion" className="w-16 h-16 mx-auto" />
            <p className="text-center mt-2">Women's Fashion</p>
          </div>
          <div className="flex-shrink-0 bg-white p-4 rounded shadow">
            <img src="https://f.nooncdn.com/mpcms/EN0002/assets/ba8591c8-8450-4313-9322-81230a47adeb.png?format=avif" alt="Summer Appliances" className="w-16 h-16 mx-auto" />
            <p className="text-center mt-2">Summer Appliances</p>
          </div>
          <div className="flex-shrink-0 bg-white p-4 rounded shadow">
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/4985a727-a5c4-404f-89f8-2d07fc3667a1.png?format=avif" alt="Sports" className="w-16 h-16 mx-auto" />
            <p className="text-center mt-2">Sports</p>
          </div>
          <div className="flex-shrink-0 bg-white p-4 rounded shadow">
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/4355cfb7-f64e-4e90-a9d9-e856ab7067aa.png?format=avif" alt="Beauty" className="w-16 h-16 mx-auto" />
            <p className="text-center mt-2">Beauty</p>
          </div>
          <div className="flex-shrink-0 bg-white p-4 rounded shadow">
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/679e023a-26b9-4fad-bf63-b30c155b113a.png?format=avif" alt="Mobiles" className="w-16 h-16 mx-auto" />
            <p className="text-center mt-2">Mobiles</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
