import React, { useState } from 'react';


function AcademicMain() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container">
        <h2>Formación académica </h2>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h3>Maestría en Administración de Negocios (MBA)</h3>
              <h4>ESAN</h4>
            </div>
            <div className="col-md-4">
              <p className="Dates">2023/09 – presente</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="content"><strong>Track de especialización:</strong> Finanzas corporativas.</p>
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={handleShow}>
            Ver cursos
          </button>
        </div>
        <hr />
      </div>

      {/* Modal */}
      <div className={`modal fade ${show ? 'show' : ''}`} id="academicModal" tabIndex="-1" aria-labelledby="academicModalLabel" aria-hidden={!show} style={{ display: show ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="academicModalLabel">Cursos en ESAN</h5>
              <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ul>
                <li>Curso 1: Finanzas Avanzadas</li>
                <li>Curso 2: Estrategia Corporativa</li>
                <li>Curso 3: Marketing Digital</li>
                {/* Agrega más cursos aquí */}
              </ul>
            </div>

          </div>
        </div>
      </div>
      {/* End Modal */}

      {/* Backdrop */}
      {show && (
        <div className="modal-backdrop fade show"></div>
      )}
      {/* End Backdrop */}
      
    </>
  )
}

export default AcademicMain

{/*        
        <hr></hr>
        <p>Poner la formación academica aqui</p>*/}