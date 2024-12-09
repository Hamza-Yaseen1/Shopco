import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <>
      <section className="navbar flex flex-wrap justify-between items-center px-6 py-4 bg-customNav">
        {/* Logo */}
        <div className="logo text-3xl font-extrabold text-gray-800"><Link href="/">Shop.co</Link></div>

        {/* Navigation Items */}
        <div className="nav-items w-full md:w-auto">
          <ul className="flex flex-wrap gap-7 items-center justify-center">
            {/* Navigation Links */}
            <li>
              <a href="/Components/newArrival" className="hover:text-blue-500 transition-colors">
                Shop
              </a>
            </li>
            <li>
              <a href="/Components/newArrival" className="hover:text-blue-500 transition-colors">
                On Sale
              </a>
            </li>
            <li>
              <a href="/Components/newArrival" className="hover:text-blue-500 transition-colors">
                New Arrival
              </a>
            </li>
            <li>
              <a href="/Components/newArrival" className="hover:text-blue-500 transition-colors">
                Brands
              </a>
            </li>

            {/* Search Bar */}
            <li className="flex items-center border border-gray-300 rounded-md bg-white shadow-sm p-2">
              <Image
                src="./icons/search.svg"
                alt="Search icon"
                className="h-5 w-5 mr-2"
                width={20}
                height={20}
              />
              <input
                type="text"
                placeholder="Search..."
                className="h-7 w-36 md:w-52 outline-none bg-gray-50 px-2 text-sm"
              />
            </li>

            {/* Icons */}
            <li>
              <a href="/Components/ProductDetails" className="hover:text-blue-500 transition-colors">
                <Image src="./icons/cart.svg" alt="Cart" className="h-6 w-6"
                width={20}
                height={20} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Image src="./icons/user.svg" alt="User Account" className="h-6 w-6" 
                width={20}
                height={20}/>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Navbar;
