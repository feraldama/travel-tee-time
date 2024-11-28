import React from "react";
import europeImage from "../assets/images/europe-1.jpeg";
import asiaPacificImage from "../assets/images/asia-1.jpeg";
import northAmericaImage from "../assets/images/northamerica-1.jpeg";
import caribbeanImage from "../assets/images/caribe-1.jpeg";
import club5 from "../assets/images/club5.jpeg";

export default function Destinations() {
  const destinations = [
    {
      title: "Camiral Golf & Wellness",
      description:
        "Considerado uno de los mejores circuitos de Europa, el Camiral Golf ofrece dos recorridos excepcionales: el Stadium Course, ideal para jugadores exigentes, y el Tour Course, más accesible pero igualmente desafiante. Sus instalaciones de lujo y vistas impresionantes lo convierten en una visita obligada.",
      image: europeImage,
    },
    {
      title: "Empordà Golf Club",
      description:
        "Situado en un entorno natural privilegiado, cuenta con dos recorridos de 18 hoyos diseñados por Robert Von Hagge. Ofrece una combinación de desafíos técnicos y paisajes que van desde dunas hasta bosques de pinos.",
      image: northAmericaImage,
    },
    {
      title: `Club Golf d'Aro – Mas Nou`,
      description:
        "Ubicado en lo alto de una colina, este campo no solo es reconocido por su diseño técnico, sino también por las impresionantes vistas al mar Mediterráneo y a la región de la Costa Brava. Su diseño serpentea entre lagos y desniveles, ofreciendo un reto emocionante.",
      image: caribbeanImage,
    },
    {
      title: "Golf Costa Brava",
      description:
        "En el corazón de la Costa Brava, este campo combina paisajes mediterráneos y diseño técnico, ofreciendo calles amplias, greens desafiantes y un entorno natural ideal para una experiencia de golf inolvidable.",
      image: club5,
    },
    {
      title: "Golf de Pals",
      description:
        "Conocido como el campo más antiguo de la región, este club está rodeado de bosques de pinos que dan sombra y un ambiente único. Su recorrido, diseñado al estilo británico, se caracteriza por calles estrechas y greens bien protegidos.",
      image: asiaPacificImage,
    },
    {
      title: "Golf Club Peralada",
      description:
        "Ubicado en un entorno más relajado, este campo es perfecto para jugadores de todos los niveles. Sus instalaciones incluyen un hotel y un spa, ofreciendo una experiencia completa de golf y relajación.",
      image: club5,
    },
  ];

  return (
    <section className="w-full py-16 bg-tuiu-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-tuiu-green-300 mb-8">
          Circuitos de golf en la Costa Brava
        </h2>
        <div className="text-xl md:text-xl font-roboto md:font-inter font-normal text-tuiu-green-300 text-justify lg:mx-8 space-y-3">
          <p>
            La Costa Brava es un auténtico paraíso para los golfistas,
            reconocido a nivel internacional por sus circuitos de golf de primer
            nivel. Estos circuitos, diseñados por prestigiosos arquitectos,
            combinan un diseño de clase mundial con impresionantes paisajes
            mediterráneos que cautivan a cualquier jugador.
          </p>
          <p>
            Ubicados estratégicamente entre majestuosas colinas, frondosos
            bosques mediterráneos y la brillante costa del mar, los circuitos
            ofrecen una experiencia inigualable tanto para aficionados que
            buscan mejorar su juego como para profesionales en busca de nuevos
            desafíos. Además, cada circuito está acompañado de servicios
            exclusivos, desde academias de golf de élite hasta alojamientos de
            lujo y restaurantes con gastronomía de primer nivel.
          </p>
          <p>
            Ya sea que busques un desafío técnico o simplemente disfrutar del
            placer de jugar rodeado de vistas espectaculares, los circuitos de
            golf de la Costa Brava son el escenario ideal para una experiencia
            inolvidable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:mx-8 mt-4">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow overflow-hidden text-justify"
            >
              <div className="group relative w-full h-48">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-4 bg-tuiu-green-300 text-white h-full">
                <h3 className="text-xl font-semibold mb-2">
                  {destination.title}
                </h3>
                <p className="text-sm">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
