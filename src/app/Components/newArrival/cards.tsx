"use client";

import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

type ProductCardProps = {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
    rating: number;
  };
};

const Card = ({ product }: ProductCardProps) => {
  const stars = Array.from({ length: 5 }, (_, index) => index < product.rating);

  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="h-48 overflow-hidden rounded-t-lg">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h3>

        {/* Product Rating */}
        <div className="flex items-center mt-2">
          {stars.map((filled, index) => (
            <AiFillStar
              key={index}
              className={`text-xl ${
                filled ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">
            ({product.rating}/5)
          </span>
        </div>

        {/* Product Price */}
        <p className="mt-3 text-lg font-bold text-gray-800">${product.price}</p>

        {/* Add to Cart Button */}
        <button className="w-full mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
