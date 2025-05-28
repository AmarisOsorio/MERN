import React from "react";



const Nav = () => {
  return (
    <>
    <nav className="relative w-full">
      
      <div className="w-full h-[3px] bg-[#1E1E1E] absolute top-0 left-0 z-10" />
      <div className="flex items-center justify-between bg-[#F40009] h-14 px-8 relative z-20">
        <ul className="flex items-center space-x-8 font-semibold text-white">
          
          <li className="relative">
            <a href="/" className="text-[#1E1E1E] underline underline-offset-[6px] decoration-2 decoration-[#1E1E1E]">
              Branches
            </a>
          </li>
          
          <li>
            <a href="#" className="hover:text-[#1E1E1E] transition">
              Products
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#1E1E1E] transition">
              Clients
            </a>
          </li>

        </ul>
      </div>
    </nav>
    </>
  );
};

export default Nav;

