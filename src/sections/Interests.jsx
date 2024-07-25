// Interests.jsx
import React from 'react';
import './Interests.css'; // Asegúrate de que la ruta del archivo CSS sea correcta y relativa

const intereses = [
    'Energía eólica',
    'Cloud computing',
    'React',
    'Finanzas',
    'Machine Learning',
    'Deep Learning'
];

const Interests = () => {
    return (
        <div className="container">
            <h2>Intereses</h2>
            <div className="row justify-content-center">
                {intereses.map((interes, index) => (
                    <div key={index} className="col-auto p-0 m-0">
                        <div className="Interests">{interes}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Interests;