import Image from "next/image";

const brandsData: { id: string; srcUrl: string }[] = [
  {
    id: "versace",
    srcUrl: "/icons/versace-logo.svg",
  },
  {
    id: "zara",
    srcUrl: "/icons/zara-logo.svg",
  },
  {
    id: "gucci",
    srcUrl: "/icons/gucci-logo.svg",
  },
  {
    id: "prada",
    srcUrl: "/icons/prada-logo.svg",
  },
  {
    id: "calvin-klein",
    srcUrl: "/icons/calvin-klein-logo.svg",
  },
];

function Hero() {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num); // Format with commas
  };

  return (
    <>
      <section className="hero flex flex-col md:flex-row bg-customGray items-center py-8">
        {/* Hero Text */}
        <div className="hero-text w-full md:w-1/2 px-6 py-12 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-none text-gray-800">
            Find Clothes
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-none text-gray-800">
            That Matches
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-none text-gray-800">
            Your Style
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Discover a collection that fits your personality and makes you shine.
          </p>
          <div className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px] mt-8">
            {/* International Brands */}
            <div className="flex flex-col">
              <span className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[40px] xl:mb-2">
                {formatNumber(200)}+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                International Brands
              </span>
            </div>

            {/* Separator */}
            <div className="ml-6 md:ml-0 h-12 md:h-full bg-black/10 w-px"></div>

            {/* High-Quality Products */}
            <div className="flex flex-col ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[40px] xl:mb-2">
                {formatNumber(2000)}+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                High-Quality Products
              </span>
            </div>

            {/* Separator (Hidden on Small Screens) */}
            <div className="hidden sm:block sm:h-12 md:h-full ml-6 md:ml-0 bg-black/10 w-px"></div>

            {/* Happy Customers */}
            <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[40px] xl:mb-2">
                {formatNumber(30000)}+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                Happy Customers
              </span>
            </div>
          </div>
          <button className="bg-black h-12 w-52 text-white font-semibold py-3 px-6 mt-5 ml-7 rounded-full hover:bg-neutral-800 transition duration-300 ease-in-out">
            Shop Now
          </button>
        </div>

        {/* Hero Image */}
        <div className="hero-img w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center mt-6">
          <Image
            src="/images/header-homepage.png"
            alt="Hero showcasing stylish clothes"
            width={800} 
            height={600} 
            className="object-cover"
          />
        </div>
      </section>

      {/* Brands Section */}
      <div className="bg-black">
        <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-7">
          {brandsData.map((brand) => (
            <Image
              key={brand.id}
              priority
              src={brand.srcUrl}
              height={0}
              width={0}
              alt={brand.id}
              className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
