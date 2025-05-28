import HeaderComponent from "../components/HeaderComponent";
import { useState } from "react";

function CategoryFormPage() {
  const [data, setData] = useState({
    nombre: ""
  });

  const onChangeNombre = (e) => {
    setData({ ...data, nombre: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", data);
  };

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <div className="border-bottom pb-3 mb-3">
          <h3>Nueva Categoría</h3>
        </div>
        <form className="row" onSubmit={handleSubmit}>
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
            <div className="mb-3 d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">Guardar</button>
              <a href="/categories" className="btn btn-secondary">Cancelar</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CategoryFormPage;
