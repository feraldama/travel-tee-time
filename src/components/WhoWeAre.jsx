import React from "react";
import image1 from "../assets/images/mision1.jpeg";
import image2 from "../assets/images/mision2.jpeg";
import image3 from "../assets/images/mision32.jpg";
import image4 from "../assets/images/mision42.jpeg";
import { TeeTimeGlobeIcon } from "./Icons";

export default function WhoWeAre() {
  return (
    <section className="w-full py-12 lg:p-16 bg-tuiu-gray-50 font-roboto">
      <div className="container mx-auto px-4">
        <div className="flex-row items-stretch justify-between text-justify tracking-tighter">
          <div className="w-full text-tuiu-green-300">
            <h2 className="text-2xl font-bold mb-3">¿Quiénes somos?</h2>
            <p className="text-xl md:text-xl font-roboto md:font-inter font-normal mb-5">
              En Travel Tee Time, somos una agencia de viajes especializada en
              diseñar experiencias únicas para los amantes del golf. Nuestro
              enfoque está en la Costa Brava, España, un paraíso para los
              golfistas donde los circuitos de clase mundial se combinan con
              paisajes mediterráneos, playas espectaculares y una rica cultura
              local.
            </p>
            <p className="text-xl md:text-xl font-roboto md:font-inter font-normal mb-5">
              Diseñamos itinerarios personalizados para jugadores de todos los
              niveles, ofreciendo una combinación perfecta de deporte, lujo y
              confort. Nos encargamos de cada detalle, seleccionando
              cuidadosamente:
            </p>
            <div className="text-xl md:text-xl font-roboto md:font-inter font-normal mb-5 space-y-3 mt-3">
              <div className="flex items-start">
                <TeeTimeGlobeIcon
                  style={{
                    width: "20px",
                    marginRight: "6px",
                    paddingTop: "3px",
                  }}
                />
                <p>Circuitos de golf exclusivos que desafían y emocionan.</p>
              </div>
              <div className="flex items-start">
                <TeeTimeGlobeIcon
                  style={{
                    width: "20px",
                    marginRight: "6px",
                    paddingTop: "3px",
                  }}
                />
                <p>Alojamientos de alta calidad para un descanso pleno.</p>
              </div>
              <div className="flex items-start">
                <TeeTimeGlobeIcon
                  style={{
                    width: "20px",
                    marginRight: "6px",
                    paddingTop: "3px",
                  }}
                />
                <p>
                  Gastronomía de primer nivel, con sabores auténticos de la
                  región.
                </p>
              </div>
              <div className="flex items-start">
                <TeeTimeGlobeIcon
                  style={{
                    width: "20px",
                    marginRight: "6px",
                    paddingTop: "3px",
                  }}
                />
                <p>
                  Actividades complementarias que enriquecen la experiencia,
                  desde tours culturales hasta momentos de relajación.
                </p>
              </div>
            </div>
            <p className="text-xl md:text-xl font-roboto md:font-inter font-normal mb-5 mt-5">
              Contamos con un equipo de expertos apasionados por el golf,
              dedicados a garantizar que cada viaje esté a la altura de tus
              expectativas. Ya sea que busques mejorar tu juego, disfrutar de
              una escapada de lujo o compartir momentos inolvidables con amigos
              y familiares, Travel Tee Time convierte cada partida en una
              experiencia inolvidable.
            </p>
            <p className="text-xl md:text-xl font-roboto md:font-inter font-normal mb-5">
              ¡Viaja, juega y vive la Costa Brava con Travel Tee Time!
            </p>
          </div>
          <div className="w-full text-tuiu-green-300">
            <h2 className="text-2xl font-bold mb-3">Nuestra misión</h2>
            <p className="text-xl md:text-xl font-roboto md:font-inter font-normal mb-5">
              Proporcionar a los amantes del golf experiencias de viaje
              inolvidables, donde el deporte se fusiona con el descubrimiento de
              paisajes espectaculares, alojamientos de lujo y un servicio
              personalizado sin igual.
            </p>
            <p className="text-xl md:text-xl font-roboto md:font-inter font-normal mb-5">
              Nos esforzamos por superar tus expectativas, creando momentos
              únicos que combinan:
            </p>
            <div className="text-xl md:text-xl font-roboto md:font-inter font-normal mb-5 space-y-3 mt-3">
              <div className="flex items-start">
                <TeeTimeGlobeIcon
                  style={{
                    width: "20px",
                    marginRight: "6px",
                    paddingTop: "3px",
                  }}
                />
                <p>
                  La pasión por el golf con los mejores circuitos de la Costa
                  Brava.
                </p>
              </div>
              <div className="flex items-start">
                <TeeTimeGlobeIcon
                  style={{
                    width: "20px",
                    marginRight: "6px",
                    paddingTop: "3px",
                  }}
                />
                <p>
                  La cultura y la gastronomía local, para conectar con la
                  esencia del destino.
                </p>
              </div>
              <div className="flex items-start">
                <TeeTimeGlobeIcon
                  style={{
                    width: "20px",
                    marginRight: "6px",
                    paddingTop: "3px",
                  }}
                />
                <p>
                  El bienestar y la comodidad, haciendo de cada viaje una
                  experiencia completa.
                </p>
              </div>
            </div>
            <p className="text-xl md:text-xl font-roboto md:font-inter font-normal mb-5 mt-5">
              En Travel Tee Time, creemos que cada viaje debe ser tan especial
              como el juego mismo. Diseñamos experiencias a medida, atendiendo
              cada detalle para garantizar que vivas una aventura excepcional,
              tanto dentro como fuera del green.
            </p>
          </div>
        </div>

        {/* Sección de imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="rounded-lg overflow-hidden">
            <img
              src={image1}
              alt="Golf 1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={image2}
              alt="Golf 2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={image3}
              alt="Golf 3"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={image4}
              alt="Golf 4"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
