import React from "react";
import Card from "./cards";

const products = [
  {
    id: "1",
    name: "Stylish Jacket",
    image: "/images/pic1",
    price: 120,
    rating: 4,
  },
  {
    id: "2",
    name: "Casual Shoes",
    image: "/images/pic2",
    price: 80,
    rating: 5,
  },
  {
    id: "3",
    name: "Smart Watch",
    image: "/images/pic3",
    price: 199,
    rating: 3,
  },
  {
    id: "4",
    name: "Smart Watch",
    image: "/images/pic4",
    price: 199,
    rating: 3,
  },
  {
    id: "5",
    name: "Smart Watch",
    image: "/images/pic5",
    price: 199,
    rating: 3,
  },
  {
    id: "6",
    name: "Smart Watch",
    image: "/images/pic6",
    price: 199,
    rating: 3,
  },
  {
    id: "7",
    name: "Smart Watch",
    image: "/images/pic7",
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
