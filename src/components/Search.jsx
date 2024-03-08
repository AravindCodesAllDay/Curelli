import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const nav = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}products`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const productsData = await response.json();
        setProducts(productsData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();

    // Add event listener to close search on outside click
    document.addEventListener("click", handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery(""); // Reset search query when closing search
    setFilteredProducts(products); // Reset filtered products when closing search
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterProducts(query);
    setIsSearchOpen(true); // Always open dropdown when typing
  };

  const filterProducts = (query) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const clicked = (ID) => {
    setSearchQuery("");
    nav(`/shop/${ID}`);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      <div className="relative flex items-center" ref={searchRef}>
        {isSearchOpen && (
          <input
            type="text"
            placeholder="Search products"
            className="bg-white border border-gray-300 rounded-md shadow-md  px-3 py-1 xs:h-[24px] sm:h-[36px] md:h-[28px] lg:h-[30px] xl:h-[30px]  2xl:hs-[32px] xs:w-[170px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[300px]  2xl:w-[350px] "
            value={searchQuery}
            onChange={handleSearchInputChange}
            onClick={() => setIsSearchOpen(true)}
          />
        )}
        <FaSearch
          className={`${
            isSearchOpen
              ? "text-black xs:size-[16px] sm:size-[18px] md:size-[20px] lg:size-[22px] xl:size-[22px]  2xl:size-[24px]"
              : "text-white xs:size-[21px] sm:size-[23px] md:size-[25px] lg:size-[27px] xl:size-[27px]  2xl:size-[29px]"
          } cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-2`}
          onClick={toggleSearch}
        />
      </div>
      {isSearchOpen && searchQuery && (
        <div className="absolute z-30 mt-24 bg-white border border-gray-300 rounded-md shadow-md w-60">
          {filteredProducts.length === 0 ? (
            <p className="py-2 px-4">No items found</p>
          ) : (
            <ul className="py-1">
              {filteredProducts.map((product) => (
                <li
                  key={product.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => clicked(product._id)}
                >
                  {product.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}
