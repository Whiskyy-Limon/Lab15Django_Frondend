import HeaderComponent from "../components/HeaderComponent";
import { useState } from "react";
import axios from "axios"; // ✅ Importa axios
import { useNavigate } from "react-router-dom"; // ✅ Para redirigir después

function CategoryFormPage() {
  const [data, setData] = useState({
    nombre: ""
  });

  const navigate = useNavigate();
  const urlApi = "http://localhost:8000/api/categories/";

  const onChangeNombre = (e) => {
    setData({ ...data, nombre: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("➡️ Enviando:", data);
      await axios.post(urlApi, { description: data.nombre }); // 👈 Campo correcto
      console.log("✅ Categoría creada");
      navigate("/categories"); // ✅ Redirige al listado
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
    }
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
