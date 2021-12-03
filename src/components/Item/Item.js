import React from "react";
import '../../../node_modules/bootstrap/js/src/collapse';

export const Item = ({item}) => {
    return (
        <div className="pt-3 col-xs-12 col-md-6 col-lg-4 d-inline-flex justify-content-center">
            <div className="px-2">
              <div className="card">
                <img src={`${item.imagen}`} className="card-img-top" alt={"perfume "+`${item.nombre}`}/>
                <div className="card-body">
                  
                  <div className="accordion pb-3" id={"acordion"+`${item.id}`}>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id={"heading"+`${item.id}`}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target= {"#"+`${item.id}`} aria-expanded="true" aria-controls={`${item.id}`}>
                          {item.nombre}
                        </button>
                      </h2>
                      <div id={`${item.id}`} className="accordion-collapse collapse" aria-labelledby={"heading"+`${item.id}`} data-bs-parent={"#" + "acordion" + `${item.id}`}>
                        <div className="accordion-body">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">Marca: {item.marca}</li>
                            <li className="list-group-item">Tipo: {item.tipo}</li>
                            <li className="list-group-item">Sexo: Femenino</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="card-text">{item.descripcion}</p>
                  <a href="https://www.google.com/?hl=es" className="btn btn-dark">Ver mas</a>
                </div>
              </div>
            </div>
          </div>
    )
}