import React, { useEffect } from 'react';
import './css/Headings.css'

function Certifications() {
  useEffect(() => {
    // Crear un nuevo elemento de script
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;

    // Añadir el script al documento
    document.body.appendChild(script);

    // Limpieza al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []); // El array vacío significa que este efecto solo se ejecuta al montar el componente

  return (
    <>
      <div className="container">
        <h2>Certificaciones</h2>
        <hr />
        <div className="row justify-content-center">
          <div className="col-auto p-0 m-0">
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="1bf3b9cf-2aef-4c2c-b7f1-cdf9f155ec1b"
              data-share-badge-host="https://www.credly.com"
            />

          </div>
          <div className="col-auto p-0 m-0">
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="57be4f13-6cf0-4cdf-956c-572819e4c2ac"
              data-share-badge-host="https://www.credly.com"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Certifications;