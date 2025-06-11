import SerieComponent from "../components/SerieComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SeriePage() {
  const navigate = useNavigate();

  const [series, setSeries] = useState([
    { cod: 1, nom: "Friends", cat: "Comedy", img: "friends" },
    { cod: 2, nom: "Law & Order", cat: "Drama", img: "law-and-order" },
    { cod: 3, nom: "The Big Bang Theory", cat: "Comedy", img: "the-big-bang" },
    { cod: 4, nom: "Stranger Things", cat: "Horror", img: "stranger-things" },
    { cod: 5, nom: "Dr. House", cat: "Drama", img: "dr-house" },
    { cod: 6, nom: "The X-Files", cat: "Drama", img: "the-x-files" },
  ]);

  const handleEliminar = (codigo) => {
    const nuevasSeries = series.filter((serie) => serie.cod !== codigo);
    setSeries(nuevasSeries);
  };

  const handleNuevo = () => {
    navigate("/series/new");
  };

  const handleEditar = (codigo) => {
    navigate(`/series/new?edit=${codigo}`); // Puedes mejorar esto luego para precargar los datos
  };

  return (
    <>
      <div className="container mt-3">
        <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
          <h3>Series</h3>
          <div>
            <button className="btn btn-primary" onClick={handleNuevo}>
              Nuevo
            </button>
          </div>
        </div>
        <div className="row">
          {series.map((serie) => (
            <div key={serie.cod} className="col-md-3 mb-3">
              <SerieComponent
                codigo={serie.cod}
                nombre={serie.nom}
                categoria={serie.cat}
                imagen={serie.img}
                onEliminar={handleEliminar}
                onEditar={handleEditar}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SeriePage;
