import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent";
import { getCategories, deleteCategory } from "../services/category.service";

function CategoryPage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  
  const loadData = async () => {
    const response = await getCategories();
    setCategories(response.data.results);
  }

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    await deleteCategory(id);
    loadData();
  };

  return (
    <>
      <div className="container mt-3">
        <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
          <h3>Categorías</h3>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/categories/new")}
          >
            Nuevo
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th className="text-center">Id</th>
              <th className="text-center" style={{ width: "100px" }}>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item) => (
              <tr key={item.id}>
                <td>{item.description}</td>
                <td className="text-center">{item.id}</td>
                <td className="text-center">
                  <button
                    className="btn btn-secondary me-2 btn-sm"
                    onClick={() => navigate(`/categories/edit/${item.id}`)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CategoryPage;
