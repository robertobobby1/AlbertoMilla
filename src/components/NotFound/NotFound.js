import { Link } from "react-router-dom";
import image from "../../images/other/logo.png";

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex", marginLeft: "auto", marginRight: "auto" }}>
        <img src={image} style={{ maxWidth: "150px", maxHeight: "150px" }} />
      </div>
      <h1 style={{ textAlign: "center", fontSize: "30px" }}>404 Not Found</h1>
      <Link to="/Proyectos">
        <h1 style={{ textAlign: "center", color: "blue" }}>Volver a inicio</h1>
      </Link>
    </div>
  );
}

export default NotFound;
