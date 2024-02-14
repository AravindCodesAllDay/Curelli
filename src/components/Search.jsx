import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const nav = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products..."
        className="bg-white border border-gray-300 rounded-md shadow-md pl-8 pr-3 py-1 w-96"
        value={searchQuery}
        onChange={handleSearchInputChange}
        onClick={() => setIsSearchOpen(true)} // Open dropdown when input is clicked
      />
      <FaSearch
        className="text-black cursor-pointer absolute right-0 top-1 mr-2 w-[25px] h-[25px]"
        onClick={toggleSearch}
      />
      {isSearchOpen && searchQuery && (
        <div className="absolute z-50 mt-2 bg-white border border-gray-300 rounded-md shadow-md w-96">
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
        </div>
      )}
    </div>
  );
}
