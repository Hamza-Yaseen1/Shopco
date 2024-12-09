"use client";
import Image from "next/image";
import { useState } from "react";

function ProductInfo() {
  const [Images, setImages] = useState("/images/pic1.png");
  // Function to change the image

  const changeImage = (NewImage:string) => {
    setImages(NewImage);
  };
  return (
    <section className="info-section flex flex-col md:flex-row gap-6 p-6">
      {/* Multi-Images Section */}
      <div className="multi-images flex flex-col items-center space-y-4">
        {/* Thumbnail 1 */}
        <div
          onClick={() => changeImage("/images/pic1.png")}
          className="img-1 h-24 w-24 hover:border-black rounded-lg border border-gray-300 flex items-center justify-center cursor-pointer"
        >
          <Image
            src={"/images/pic1.png"}
            height={96}
            width={96}
            alt={"Product Thumbnail 1"}
            className="rounded-lg object-cover"
          />
        </div>
        {/* Thumbnail 2 */}
        <div
          onClick={() => changeImage("/images/pic3.png")}
          className="img-2 hover:border-black h-24 w-24 rounded-lg border border-gray-300 flex items-center justify-center cursor-pointer"
        >
          <Image
            src={"/images/pic3.png"}
            height={96}
            width={96}
            alt={"Product Thumbnail 2"}
            className="rounded-lg object-cover"
          />
        </div>
        {/* Thumbnail 3 */}
        <div
          onClick={() => changeImage("/images/pic5.png")}
          className="img-3 hover:border-black h-24 w-24 rounded-lg border border-gray-300 flex items-center justify-center cursor-pointer"
        >
          <Image
            src={"/images/pic5.png"}
            height={96}
            width={96}
            alt={"Product Thumbnail 3"}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Main Image Section */}
      <div className="main-images hover:border-black h-96 w-72 md:w-96 border rounded-lg border-gray-300 flex items-center justify-center overflow-hidden">
        <Image
          src={Images} // Bind to state
          height={384}
          width={288}
          alt={"Main Product Image"}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Description Section */}
      <div className="product-descrip flex flex-col space-y-4 p-4 h-auto w-full md:w-64 border rounded-lg border-gray-300">
        <h2 className="text-lg font-bold">Product Title</h2>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum
          facilisis porta.
        </p>
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-black">$199</span>
          <span className="text-sm line-through text-gray-500">$249</span>
          <span className="text-xs text-red-500 bg-red-100 px-2 py-1 rounded-full">
            -20%
          </span>
        </div>
        <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default ProductInfo;
