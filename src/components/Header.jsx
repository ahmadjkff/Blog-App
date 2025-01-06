// src/Header.jsx
import React from "react";
import searchIcon from "../assets/search.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header({ data, setData }) {
  const onSearch = (e) => {
    const value = e.target.value;
    const filteredData = data?.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    setData(filteredData);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10 flex align-middle items-center justify-between my-auto py-6 sm:px-1 md:px-28">
      <Link to="..">
        <img
          className="max-w-32 sm:max-w-40 md:max-w-56"
          src={logo}
          alt="logo"
        />
      </Link>

      <Link className="mt-[6px]" to="..">
        Home
      </Link>

      <div className="relative">
        <input
          className="bg-gray-100 border-gray-200  pl-4 p-2 rounded-md"
          type="text"
          placeholder="Search"
          onChange={onSearch}
        />
        <img
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4"
          src={searchIcon}
          alt="search icon"
        />
      </div>
    </header>
  );
}

export default Header;
