import React from 'react';

// Componente para representar un programa educativo
function EducationalProgram({ logoSrc, altText, title, institution, dates, content }) {
    return (
        <div className="row">
            {/* Logo institución */}
            <div className="col-md-2">
                <img
                    src={logoSrc}
                    alt={altText}
                    className="img-fluid rounded-circle"
                    style={{ width: '80px', height: '80px' }} // Ajusta el tamaño según sea necesario
                />
            </div>
            <div className="col-md-10">
                <div className="row">
                    {/* Programa e institución */}
                    <div className="col-md-8">
                        <h3>{title}</h3>
                        <h4>{institution}</h4>
                    </div>
                    {/* Fechas */}
                    <div className="col-md-4">
                        <p className="Dates">{dates}</p>
                    </div>
                </div>
                {/* Contenido */}
                <div className="row">
                    <div className="col-12">
                        <p className="content">{content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AcademicMain() {
    return (
        <div className="container">
            <h2>Formación académica</h2>
            {/* Primer programa educativo */}
            <EducationalProgram
                logoSrc="./../src/assets/icons/institutions/ESAN.jpg"
                altText="ESAN"
                title="Programa educativo #01"
                institution="Institución educativa #01"
                dates="Fecha de inicio – fecha de fin"
                content="Contenido descriptivo del programa educativo #01"
            />
            <hr />
            {/* Segundo programa educativo */}
            <EducationalProgram
                logoSrc="./../src/assets/icons/institutions/UNI.jpg"
                altText="UNI"
                title="Programa educativo #02"
                institution="Institución educativa #02"
                dates="Fecha de inicio2 – fecha de fin2"
                content="Contenido descriptivo del programa educativo #02"
            />
            <hr />
        </div>
    );
}

export default AcademicMain;