import HeaderComponent from "../components/HeaderComponent";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createCategory, updateCategory } from "../services/category.service";

function CategoryFormPage() {

  const params = useParams();

  const [data, setData] = useState({
    description: ""
  });

  const navigate = useNavigate();

  const onChangeNombre = (e) => {
    setData({ ...data, description: e.target.value });
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      await updateCategory(params.id, data); 
    } else {
      await createCategory(data);
    }
    navigate("/categories");
  };

  return (
    <>
      <div className="container mt-3">
        <div className="border-bottom pb-3 mb-3">
          {params.id?
            <h3>Actualizar Categoria</h3> 
          :
            <h3>Nueva Categoría</h3>
          }
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
