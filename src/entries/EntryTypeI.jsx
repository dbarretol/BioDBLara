import React from 'react';
import ReactMarkdown from 'react-markdown';

// Definimos el componente
function EntryTypeI({ logoSrc, altText, title, institution, startDate, endDate, content }) {
    return (
        <div className="row mb-2"> {/* Añadido mb-4 para margen inferior entre entradas */}
            <div className="col-md-2 d-flex align-items-center justify-content-center">
                <img
                    src={logoSrc}
                    alt={altText}
                    className="img-fluid rounded-circle"
                    style={{ width: '80px', height: '80px' }}
                />
            </div>
            <div className="col-md-10">
                <div className="row">
                    <div className="col-md-9">
                        <h3>{title}</h3>
                        <h4>{institution}</h4>
                    </div>
                    <div className="col-md-3">
                        <p className="Dates">{`${startDate} - ${endDate}`}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ReactMarkdown className="content">{content}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EntryTypeI;