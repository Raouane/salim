import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="font-display text-2xl text-primary">SALIM</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center">
            <a href="#reservation" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              Réserver
            </a>
            <a href="#menus" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              Nos Menus
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#reservation"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Réserver
          </a>
          <a
            href="#menus"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Nos Menus
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;