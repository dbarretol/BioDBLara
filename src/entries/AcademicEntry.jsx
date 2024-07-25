import React from 'react';
import ReactMarkdown from 'react-markdown';
function AcademicEntry({ logoSrc, altText, title, institution, startDate, endDate, content }) {
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
                        <p className="Dates">{startDate} - {endDate}</p>
                    </div>
                </div>
                {/* Contenido */}
                <div className="row">
                    <div className="col-12">
                        <ReactMarkdown className="content" children={content} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AcademicEntry;