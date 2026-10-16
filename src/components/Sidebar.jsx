import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function Sidebar({ menu, showMenu }) {
  const [activeMenu, setActiveMenu] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    setActiveMenu(null);
    navigate("/");
  };

  const handleBackAll = () => {
    showMenu();
    setActiveMenu(null);
  };

  {
    /*STYLE SECTION*/
  }
  const sidebarStyle = {
    position: "fixed",
    top: 0,
    left: 0,

    width: menu ? "40vw" : "0",
    maxWidth: "100vw",
    height: "100vh",
    height: "100dvh",

    backgroundColor: "rgba(0, 0, 0, 0.65)",

    backdropFilter: "blur(30px)",
    WebkitBackdropFilter: "blur(30px)",

    overflowX: "hidden",
    overflowY: "auto",

    zIndex: 1100,

    transition: "width 0.5s ease-in-out",
  };

  const closeMenuStyle = {
    position: "absolute",
    top: "38px",
    left: "17rem",

    display: "flex",
    alignItems: "center",
    gap: "8px",

    margin: 0,
    padding: 0,

    fontSize: "14px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  const linksStyle = {
    display: "flex",
    flexDirection: "column",

    width: "min(420px, calc(100% - 48px))",

    margin: "250px 40px 40px auto",
    padding: 0,
  };

  const modelsMenuStyle = {
    display: "flex",
    flexDirection: "column",

    width: "min(420px, calc(100% - 48px))",

    margin: "120px 40px 40px auto",
    padding: 0,
  };

  const linkStyle = {
    display: "block",
    textAlign: "right",

    color: "#a1a5aa",
    fontSize: "1.2rem",
    lineHeight: "3.8rem",

    whiteSpace: "nowrap",
    textDecoration: "none",
    transition: "color 0.25s ease",
    cursor: "pointer",
  };

  const backStyle = {
    ...linkStyle,
    marginBottom: "10px",
  };

  return (
    <section>
      <div style={sidebarStyle}>
        <div
          onClick={handleBackAll}
          style={closeMenuStyle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
          <span>CLOSE</span>
        </div>

        <div style={linksStyle} className="Links">
          {activeMenu === null && (
            <>
              <Link to="/InspireGreatness" style={{ textDecoration: "none" }}>
                <span >
                  INSPIRING GREATNESS
                </span>
              </Link>

              <Link style={{ textDecoration: "none" }}>
                <span
                  onClick={() => setActiveMenu("Model")}
                >
                  MODELS
                </span>
              </Link>

              <Link to="/" style={{ textDecoration: "none" }}>
                <span
                 onClick={() => setActiveMenu("Bespoke")}
                >
                  BESPOKE
                </span>
              </Link>

              <Link to="/" style={{ textDecoration: "none" }}>
                <span
                  onClick={() => setActiveMenu("Ownership")}
                >
                  OWNERSHIP
                </span>
              </Link>

              <Link to="/Proven" style={{ textDecoration: "none" }}>
                <span >
                  PROVENANCE
                </span>
              </Link>

              <Link to="/" style={{ textDecoration: "none" }}>
                <span >
                  BOUTIQUE
                </span>
              </Link>

              <Link to="/" style={{ textDecoration: "none" }}>
                <span>
                  MUSE ARTS PROGRAMME
                </span>
              </Link>
            </>
          )}
        </div>
        

        {activeMenu === "Model" && (
          <div className="Models-Menu">
            <span className="sidebar-back" onClick={handleBack}>
              ← BACK
            </span>

            {["PHANTOM", "GHOST", "BOAT TAIL", "SPECTRE", "CULLINAN"].map(
              (model) => (
                <Link
                  to={`/Model/${model.toLocaleLowerCase()}`}
                  key={model}
                  style={{ textDecoration: "none" }}
                >
                  <span className="linkHover" >
                    {model}
                  </span>
                </Link>
              ),
            )}
          </div>
        )}

        {activeMenu === "Bespoke" && (
          <div className="Models-Menu">
            <span  className="sidebar-back" onClick={handleBack}>
              ← BACK
            </span>

            {[
              "DISCOVER",
              "COACHBUILD",
              "COACHBUILD COLLECTION",
              "INSPIRATION",
              "CRAFT",
              "OBJECTS OF LUXURY",
            ].map((model) => (
              <Link to="/" key={model} style={{ textDecoration: "none" }}>
                <span  >{model}</span>
              </Link>
            ))}
          </div>
        )}

        {activeMenu === "Ownership" && (
          <div className="Models-Menu">
            <span className="sidebar-back" onClick={handleBack}>
              ← BACK
            </span>

            {["OWNER'S LOUNGE", "YOUR MOTOR CAR", "WHISPERS", "CHARGING"].map(
              (model) => (
                <Link to="/" key={model} style={{ textDecoration: "none" }}>
                  <span  >{model}</span>
                </Link>
              ),
            )}
          </div>
        )}
      </div>
    </section>
  );
}
export default Sidebar;
