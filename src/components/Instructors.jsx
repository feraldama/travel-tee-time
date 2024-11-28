import React from "react";
import instructorImage from "../assets/images/instructor-1.png"; // Ajusta las rutas según tu proyecto
import golfImage1 from "../assets/images/golf-1.png";
import golfImage2 from "../assets/images/golf-2.png";
import golfImage3 from "../assets/images/golf-3.png";
import golfImage4 from "../assets/images/golf-4.png";
import { TeeTimeGlobeIcon } from "./Icons";

export default function Instructors() {
  const services = [
    {
      number: "01",
      title: "Clases personalizadas",
      description: [
        "Principiantes: Introducción al golf, fundamentos básicos como grip, postura y swing.",
        "Jugadores intermedios: Corrección de técnicas, análisis del swing y estrategias para mejorar el rendimiento.",
        "Jugadores avanzados: Perfeccionamiento de habilidades específicas, manejo de situaciones complejas en el campo y preparación para torneos.",
      ],
    },
    {
      number: "02",
      title: "Análisis técnico y tecnológico",
      description: [
        "Video análisis: Uso de cámaras para evaluar y corregir el swing con precisión.",
        "TrackMan o simuladores: Tecnología que mide la trayectoria de la bola, la velocidad del palo y otros datos clave para optimizar el juego.",
      ],
    },
    {
      number: "03",
      title: "Clases grupales y talleres",
      description: [
        "Dinámicas en grupo: Ideal para empresas, eventos sociales o familias.",
        "Talleres temáticos: Clases enfocadas en habilidades específicas, como juego corto, approach o putting.",
      ],
    },
    {
      number: "04",
      title: "Desarrollo mental y estratégico",
      description: [
        "Gestión emocional: Ayuda a controlar la presión en el campo, mejorar la concentración y aumentar la confianza.",
        "Estrategias de juego: Planificación de recorridos, elección de palos y toma de decisiones tácticas.",
      ],
    },
  ];

  return (
    <section className="bg-tuiu-gray-50 py-6 text-tuiu-green-300">
      <div className="container mx-auto px-4 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-6">
          ¿Por qué necesitas un profesor?
        </h2>
        <p className="text-lg mb-8">
          Un profesor de golf es un profesional capacitado para enseñar y
          perfeccionar las habilidades de este deporte, adaptándose a las
          necesidades y objetivos de cada jugador. Su oferta abarca desde la
          formación básica hasta técnicas avanzadas, y puede incluir una
          variedad de servicios que enriquecen la experiencia de aprendizaje.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Imagen principal */}
          <div className="rounded-lg overflow-hidden">
            <img
              src={instructorImage}
              alt="Instructor de golf"
              className="w-full h-auto"
            />
          </div>

          {/* Lista de servicios */}
          <div className="flex flex-col space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md"
              >
                <span className="text-3xl font-bold text-tuiu-green-500">
                  {service.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-tuiu-green-500 mb-2">
                    {service.title}
                  </h3>
                  {/* Contenedor para íconos y descripciones */}
                  <ul className="space-y-2">
                    {service.description.map((point, i) => {
                      const [boldText, normalText] = point.split(":");
                      return (
                        <li key={i} className="flex items-start space-x-1">
                          <TeeTimeGlobeIcon
                            style={{ width: "20px", marginRight: "8px" }}
                          />
                          <span className="text-tuiu-green-700">
                            <strong>{boldText}:</strong>
                            {normalText}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Galería de imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <img
            src={golfImage1}
            alt="Golf"
            className="w-full h-auto rounded-lg"
          />
          <img
            src={golfImage2}
            alt="Golf"
            className="w-full h-auto rounded-lg"
          />
          <img
            src={golfImage3}
            alt="Golf"
            className="w-full h-auto rounded-lg"
          />
          <img
            src={golfImage4}
            alt="Golf"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Beneficios */}
        <div className="bg-white rounded-xl p-8 mt-16">
          <h3 className="text-3xl font-bold mb-4">
            Beneficios de trabajar con un instructor de golf
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-1">
              <TeeTimeGlobeIcon style={{ width: "25px", marginRight: "6px" }} />
              <span>Mejora técnica más rápida y efectiva.</span>
            </li>
            <li className="flex items-center space-x-1">
              <TeeTimeGlobeIcon style={{ width: "25px", marginRight: "6px" }} />
              <span>Corrección de malos hábitos desde el inicio.</span>
            </li>
            <li className="flex items-center space-x-1">
              <TeeTimeGlobeIcon style={{ width: "25px", marginRight: "6px" }} />
              <span>Desarrollo de confianza y consistencia.</span>
            </li>
            <li className="flex items-center space-x-1">
              <TeeTimeGlobeIcon style={{ width: "25px", marginRight: "6px" }} />
              <span>Experiencias personalizadas y dinámicas.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
