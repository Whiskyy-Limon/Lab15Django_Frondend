import React from "react";

function SerieComponent(props) {
  const handleEliminarClick = () => {
    props.onEliminar(props.codigo);
  };

  const handleEditarClick = () => {
    props.onEditar(props.codigo);
  };

  return (
    <div className="card">
      <img
        className="card-img-top"
        src={"https://dummyimage.com/400x250/000/fff&text=" + props.imagen}
        alt="img"
      />
      <div className="card-body">
        <h5 className="card-title">{props.nombre}</h5>
        <p className="card-text">{props.categoria}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-secondary" onClick={handleEditarClick}>
            Editar
          </button>
          <button className="btn btn-danger" onClick={handleEliminarClick}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default SerieComponent;
