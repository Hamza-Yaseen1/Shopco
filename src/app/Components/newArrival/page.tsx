import React from "react";
import Card from "./cards";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Filters from "../shop-page/filters/page";

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
    <div className="flex flex-col md:flex-row">
      {/* Filter Section */}
      <div className="filter w-full md:w-1/3 p-4 bg-gray-100 rounded-md">
        <h2 className="text-lg font-bold mb-4"> <Filters/> </h2>
      </div>

      {/* Product Cards Section */}
      <div className="w-full md:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
