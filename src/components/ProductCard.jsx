import React, { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const ProductCard = ({ product }) => {
  let {setCardIteam}=useContext(MyStore)
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100">

      {/* Image */}
      <div className="h-64 flex items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category */}
        <p className="text-sm text-blue-600 font-medium uppercase">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mt-2 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-yellow-500">★</span>

          <span className="font-medium text-gray-700">
            {product.rating.rate}
          </span>

          <span className="text-sm text-gray-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-5">
          <p className="text-2xl font-bold text-gray-900">
            ${product.price}
          </p>

          <button className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition" onClick={()=>{
            setCardIteam(prev=>[...prev,product])
          }}>
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;