import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full p-2 md:p-4">
      <nav className="w-full flex justify-between items-center">
        <img src="/assets/logo.png" />
        <menu className="flex gap-8">
          <li>Flavours</li>
          <li>Store</li>
          <li>Blog</li>
          <li>About Us</li>
        </menu>
        <div className="flex items-center gap-4">
          <div className="w-[40px] h-[40px]">
            <img src="/assets/search.png" alt="" />
          </div>
          <div className="w-[40px] h-[40px]">
            <img src="/assets/cart.png" alt="" />
          </div>
          <div className="w-[40px] h-[40px]">
            <img src="/assets/user.png" alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
