import React from "react";
import Card from "./cards";

const products = [
  {
    id: "1",
    name: "Stylish Jacket",
    image: "/images/pic1.png",
    price: 120,
    rating: 4,
  },
  {
    id: "2",
    name: "Casual Shoes",
    image: "/images/pic2.png",
    price: 80,
    rating: 5,
  },
  {
    id: "3",
    name: "Smart Watch - Classic",
    image: "/images/pic3.png",
    price: 199,
    rating: 3,
  },
  {
    id: "4",
    name: "Smart Watch - Advanced",
    image: "/images/pic4.png",
    price: 220,
    rating: 4,
  },
  {
    id: "5",
    name: "Fitness Tracker",
    image: "/images/pic5.png",
    price: 150,
    rating: 5,
  },
  {
    id: "6",
    name: "Digital Smart Watch",
    image: "/images/pic6.png",
    price: 210,
    rating: 4,
  },
  {
    id: "7",
    name: "Premium Watch",
    image: "/images/pic7.png",
    price: 250,
    rating: 5,
  },
  {
    id: "8",
    name: "Premium Watch",
    image: "/images/pic8.png",
    price: 250,
    rating: 5,
  },
  {
    id: "9",
    name: "Premium Watch",
    image: "/images/pic9.png",
    price: 250,
    rating: 5,
  },
];

const NewArrival = () => {
  return (
   <>
   <div className="flex">
   <div className="filter w-1/3">Filter Portion here</div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
   </div>
   </>
  );
};

export default NewArrival;
