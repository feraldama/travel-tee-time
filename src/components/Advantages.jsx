import React from "react";
import golfImage from "../assets/images/ventajasImagen-1.jpeg";
import icon from "../assets/icons/check.svg";
import { TeeTimeGlobeIcon } from "./Icons"; // Ajusta la ruta según tu estructura

export default function Advantages() {
  const advantages = [
    {
      title: "Atención personalizada:",
      description:
        "Tu guía será un profesional del golf, que os acompañará, asesorará y enseñará durante toda vuestra estancia. Nuestros especialistas en viajes de golf trabajan estrechamente con cada cliente para entender sus preferencias y crear la experiencia perfecta.",
    },
    {
      title: "Acceso a circuitos exclusivos:",
      description:
        "Colaboramos con los circuitos más prestigiosos y exclusivos del mundo, garantizando acceso preferencial para nuestros clientes.",
    },
    {
      title: "Alojamientos de lujo:",
      description:
        "Nos asociamos con los mejores hoteles y resorts para ofrecer estancias que combinan confort, elegancia y proximidad a los circuitos de golf.",
    },
    {
      title: "Flexibilidad y comodidad:",
      description:
        "Nos encargamos de toda la logística durante el viaje, desde transporte, alquiler de palos, etc.",
    },
  ];

  return (
    <section className="w-full py-12 lg:p-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Ventajas de viajar */}
        <h2 className="text-3xl font-bold text-center text-tuiu-green-300 mb-8">
          Ventajas de viajar con Travel Tee Time
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:gap-10">
          <div className="w-full lg:w-1/2 space-y-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start text-justify">
                <TeeTimeGlobeIcon
                  style={{ width: "25px", marginRight: "6px" }}
                />
                <div>
                  <h3 className="text-lg font-semibold text-tuiu-green-300">
                    {advantage.title}
                  </h3>
                  <p className="text-tuiu-green-700">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 rounded-lg overflow-hidden">
            <img src={golfImage} alt="Golf" className="w-full h-auto" />
          </div>
        </div>

        {/* Nuestros clientes */}
        <div className="relative bg-tuiu-green-300 text-white rounded-2xl p-8 mt-16">
          <h2 className="text-3xl font-bold mb-4">Nuestros clientes</h2>
          <p className="text-lg text-justify tracking-tight">
            Atendemos tanto a jugadores aficionados que buscan una experiencia
            relajante como a golfistas más experimentados que desean desafiarse
            en los mejores circuitos del mundo. También organizamos viajes para
            grupos, eventos corporativos y retiros de golf.
          </p>
          <div className="absolute top-0 right-3 transform translate-x-1/2 -translate-y-1/2 bg-green-200 rounded-full p-4">
            <img src={icon} alt="Decorative Icon" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
