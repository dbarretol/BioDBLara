import React from 'react';
import './css/Languages.css'
import './css/Headings.css'

// Lista de idiomas con sus respectivas imágenes y niveles
const languages = [
  {
    name: 'Inglés',
    level: 'Avanzado',
    image: './../src/assets/icons/languages/usa.png',
    alt: 'Inglés'
  },
  {
    name: 'Italiano',
    level: 'Avanzado',
    image: './../src/assets/icons/languages/italy.png',
    alt: 'Italiano'
  },
  {
    name: 'Francés',
    level: 'Avanzado',
    image: './../src/assets/icons/languages/france.png',
    alt: 'Francés'
  }
];

function LanguageItem({ name, level, image, alt }) {
  return (
    <div className="language-card">
      <div>
        <img src={image} alt={alt} />
        <div>
          <strong>{name}</strong> <br /> <strong>Nivel:</strong> {level}
        </div>
      </div>
    </div>
  );
}

function Languages() {
  return (
    <div className="container">
      <h2>Idiomas</h2>
      <div className="language-container">
        {languages.map((lang, index) => (
          <LanguageItem
            key={index}
            name={lang.name}
            level={lang.level}
            image={lang.image}
            alt={lang.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default Languages;