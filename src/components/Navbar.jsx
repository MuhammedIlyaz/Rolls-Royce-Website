import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import rollsLogo from "../assets/image/Rolls_logo.svg";
import Esatsy from "../assets/image/Spirt_logo.svg";
import Sidebar from '../components/Sidebar.jsx'

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu , setMenu] = useState(false)
  function showMenu(){
    setMenu(prev => !prev)
  }

  useEffect(() =>{ 
    if(menu){
      document.body.style.overflow = 'hidden'
    }
      
    return() =>{
      document.body.style.overflow = 'auto'
    }
  }, [menu])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);


   {/*STYLE SECTION*/}

    const navbarStyle = {
    position: "fixed",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",

    width: scrolled ? "100%" : "calc(100% - 80px)",
    maxWidth: scrolled ? "100%" : "1420px",
    height: scrolled ? "90px" : "110px",
    padding: scrolled ? "0 90px" : "0 24px",

    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto minmax(0, 1fr)",
    alignItems: "center",

    backgroundColor: scrolled
      ? "rgba(0, 0, 0, 0.28)"
      : "transparent",

    backdropFilter: scrolled ? "blur(20px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",

    borderBottom: scrolled ? "none" : "1px solid #3b3b3b",
    zIndex: 1000,

    transition:
      "height 0.4s ease, width 0.4s ease, max-width 0.4s ease, padding 0.4s ease, background-color 0.4s ease, backdrop-filter 0.4s ease",
  };

  const menuStyle = {
    justifySelf: "start",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    minWidth: 0,
    fontSize: "14px",
    cursor: "pointer",
  };

   const menuStyleMobile = {
    
    display: "none",
   }

  const logoStyle = {
    justifySelf: "center",
    display: "block",
    width: "100px",
    height: "50px",
    objectFit: "contain",
  };

  const searchDealerStyle = {
    justifySelf: "end",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    minWidth: 0,
    fontSize: "14px",
  };

  const menuIconStyle = {
    width: "18px",
    height: "18px",
    cursor: "pointer",
    flexShrink: 0,
  };
  

  
  return (
    <section id="Navbar">
      <nav className={scrolled ? "navbar scrolled" : "navbar"} style={navbarStyle}>
        {/* Menu section */}
        <div style={menuStyle} >
          <svg onClick={showMenu}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
             style={menuIconStyle}
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
          <span>MENU</span>
        </div>
        <Link to="/">
        <img src={scrolled ? Esatsy : rollsLogo} alt="F-logo" id="First_logo" style={logoStyle} />
        </Link>


        {/*search dealer*/}
        <div style={searchDealerStyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
             style={menuIconStyle}
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
          <span>SEARCH DEALER</span>

          <svg  onClick={showMenu}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
            style={menuStyleMobile}
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
      </nav>

      <Sidebar menu={menu}  showMenu={showMenu}/>
    </section>
  );
}

export default Navbar;
