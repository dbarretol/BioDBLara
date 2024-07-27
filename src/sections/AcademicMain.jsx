import React from 'react';
import './css/Headings.css'
import EducationalProgram from '../entries/EntryTypeI';
import educationalProgramsData from '../data/AcademicHistory.json';

function AcademicMain() {
    return (
        <div className="container">
            <h2>Formación académica</h2>
            {educationalProgramsData.map((program, index) => (
                <React.Fragment key={index}>
                    <EducationalProgram
                        logoSrc={program.logoSrc}
                        altText={program.altText}
                        title={program.title}
                        institution={program.institution}
                        startDate={program.startDate}
                        endDate={program.endDate}
                        content={program.content}
                    />
                    <hr />
                </React.Fragment>
            ))}
        </div>
    );
}

export default AcademicMain;