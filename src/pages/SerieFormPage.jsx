import HeaderComponent from "../components/HeaderComponent";
import { useState } from "react";

function SerieFormPage() {
  const [data, setData] = useState({
    nombre: "",
    categoria: ""
  });

  const onChangeNombre = (e) => {
    setData({ ...data, nombre: e.target.value });
  };

  const onChangeCategoria = (e) => {
    setData({ ...data, categoria: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", data);
  };

  return (
    <>
      <div className="container mt-3">
        <div className="border-bottom pb-3 mb-3">
          <h3>Nuevo - Serie</h3>
        </div>
        <form className="row" onSubmit={handleSubmit}>
          <div className="col-md-4">
            <img
              className="card-img-top"
              src={"https://dummyimage.com/400x250/000/fff"}
              alt="img"
            />
          </div>
          <div className="col-md-8">
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                value={data.nombre}
                onChange={onChangeNombre}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputCategory" className="form-label">Categoría</label>
              <select
                className="form-select"
                id="inputCategory"
                value={data.categoria}
                onChange={onChangeCategoria}
              >
                <option value="">Seleccione una opción</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedy</option>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="inputImage" className="form-label">Imagen</label>
              <input
                type="file"
                className="form-control"
                id="inputImage"
              />
            </div>
            <div className="mb-3 d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">Guardar</button>
              <a href="/series" className="btn btn-secondary">Cancelar</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SerieFormPage;
