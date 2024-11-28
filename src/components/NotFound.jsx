import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-96 bg-tuiu-gray-50 text-tuiu-green-500">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">
        Lo sentimos, la página que buscas no existe.
      </p>
      <Link
        to="/"
        className="px-6 py-2 text-white bg-tuiu-green-500 rounded-lg hover:bg-tuiu-green-400"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;
