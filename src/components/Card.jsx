import React, { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const Card = () => {
  let {cardIteam}=useContext(MyStore)

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-center mb-8">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {cardIteam.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >

            {/* Product Image */}
            <div className="h-64 bg-gray-50 flex items-center justify-center p-5">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain hover:scale-105 transition duration-300"
              />
            </div>

            {/* Product Details */}
            <div className="p-5">

              {/* Category */}
              <p className="text-xs font-semibold text-blue-600 uppercase">
                {product.category}
              </p>

              {/* Title */}
              <h2 className="text-lg font-bold text-gray-800 mt-2 line-clamp-2">
                {product.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-4">
                <span className="text-yellow-500 text-lg">
                  ★
                </span>

                <span className="font-semibold text-gray-700">
                  {product.rating.rate}
                </span>

                <span className="text-sm text-gray-400">
                  ({product.rating.count})
                </span>
              </div>

              {/* Price + Button */}
              <div className="flex items-center justify-between mt-5">

                <span className="text-2xl font-bold text-gray-900">
                  ${product.price}
                </span>
              </div>
               <p>cart</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Card;
