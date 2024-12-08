import React from "react";
import Card from "./cards";

const products = [
  {
    id: "1",
    name: "Stylish Jacket",
    image: "/images/jacket.jpg",
    price: 120,
    rating: 4,
  },
  {
    id: "2",
    name: "Casual Shoes",
    image: "/images/shoes.jpg",
    price: 80,
    rating: 5,
  },
  {
    id: "3",
    name: "Smart Watch",
    image: "/images/watch.jpg",
    price: 199,
    rating: 3,
  },
];

const NewArrival = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default NewArrival;
