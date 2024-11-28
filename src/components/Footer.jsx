import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  WhatsAppIcon,
  TeeTimeIcon,
} from "./Icons"; // Ajusta la ruta si es necesario

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    // Hacer scroll al inicio
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Redirigir después de un pequeño retraso
    setTimeout(() => {
      navigate("/");
    }, 50); // Ajusta el tiempo según el comportamiento deseado
  };

  return (
    <section className="bg-tuiu-green-500 text-white py-14">
      <div className="max-w-[1920px] mx-auto px-4">
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32">
          <div className="flex justify-between flex-col lg:flex-row space-y-8">
            {/* Logo */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 pt-3">
              <button
                onClick={handleLogoClick}
                className="focus:outline-none" // Cambiar Link a un botón para manejar eventos personalizados
              >
                <TeeTimeIcon />
              </button>
            </div>

            {/* Ayuda */}
            <div className="flex flex-col gap-2 lg:gap-8 items-center">
              <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-[34.83px]">
                Ayuda
              </span>
              <span className="flex flex-row items-center gap-2">
                <a
                  href="https://wa.me/34659011723?text=Hola,%20estoy%20interesado%20en%20más%20información."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                  <p className="text-xl">Atención al Cliente</p>
                </a>
              </span>
            </div>

            {/* Redes Sociales */}
            <div className="flex flex-col gap-2 lg:gap-8 items-center">
              <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-[34.83px]">
                Seguinos
              </span>
              <span className="flex justify-center gap-6 sm:gap-8 md:gap-10">
                <FacebookIcon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                <InstagramIcon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                <TwitterIcon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
              </span>
            </div>
          </div>

          {/* Línea divisora */}
          <div className="mt-[25px] border-b-[2.18px] border-white opacity-20"></div>

          {/* Derechos Reservados */}
          <div className="text-xs sm:text-sm md:text-base text-center flex flex-col lg:text-[19px] my-1 pt-5">
            <span>© {currentYear} - Todos los derechos reservados</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
