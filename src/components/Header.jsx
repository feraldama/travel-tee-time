import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { TeeTimeIcon } from "./Icons";

const navLinks = [
  { href: "#welcome", text: "Bienvenido" },
  { href: "#who-we-are", text: "Quienes somos" },
  { href: "#services", text: "Nuestros servicios" },
  { href: "#destination", text: "Circuitos de golf" },
  // { href: "#advantages", text: "Ventajas" },
  { href: "/instructors", text: "Clases de Golf" },
];

const NavLinks = () => {
  const handleScroll = (id) => {
    if (id.startsWith("/")) {
      // Redirigir si es una URL absoluta
      window.location.href = id;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <ul className="flex flex-col xl:flex-row xl:space-x-8 text-right">
      {navLinks.map(({ href, text }) => (
        <li key={href}>
          <button
            onClick={() => handleScroll(href.replace("#", ""))}
            className="block p-2 transition-colors duration-200 hover:text-gray-400 focus:outline-none rounded"
          >
            {text}
          </button>
        </li>
      ))}
    </ul>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const location = useLocation(); // Hook para obtener la ruta actual

  return (
    <nav className="bg-tuiu-green-500 text-tuiu-gray-100 font-roboto font-medium text-base">
      <div className="container mx-auto px-4 md:px-8 lg:px-20 max-w-screen-2xl py-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center w-full xl:w-auto justify-between xl:justify-start">
            <div className="flex-grow flex justify-center xl:justify-start">
              <div className="w-48">
                <Link to="/">
                  <TeeTimeIcon />
                </Link>
              </div>
            </div>
            {location.pathname === "/" && (
              <button
                onClick={toggleMenu}
                className="p-2 xl:hidden focus:outline-none focus:ring-2 focus:ring-tuiu-green-300 rounded"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={
                  menuOpen
                    ? "Cerrar menú de navegación"
                    : "Abrir menú de navegación"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      menuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Mostrar NavLinks solo en la URL principal */}
          {location.pathname === "/" && (
            <div className="hidden xl:flex xl:items-center xl:space-x-8">
              <NavLinks />
            </div>
          )}
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="px-4 md:px-8 lg:px-20 xl:hidden">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

export default Header;
