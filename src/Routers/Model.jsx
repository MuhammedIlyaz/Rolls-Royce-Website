import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Model01 from '/src/assets/image/Models/Phantom.jpg';
import Model02 from '/src/assets/image/Models/ghost.jpg';
import Model03 from '/src/assets/image/Models/boatTail.jpg'
import Model04 from '/src/assets/image/Models/spectre.jpg';
import Model05 from '/src/assets/image/Models/Cullinun.jpg';

const Model = () => {
  const { modelName } = useParams();

  useEffect(() => {
    if (modelName) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modelName]);

  const CarTypes = [
    {
      modelName: "phantom",
      image: Model01 ,
      alt: "Phantom",
    },
    {
      modelName: "ghost",
      image: Model02,
      alt: "Ghost",
    },
    {
      modelName: "boat tail",
      image: Model03,
      alt: "BoatTail",
    },

    {
      modelName: "spectre",
      image: Model04,
      alt: "spectre",
    },

    {
      modelName: "cullinan",
      image: Model05,
      alt: "Spirit",
    },
  ];

  const selectedCar = CarTypes.find((type) => type.modelName === modelName);

const Style = {
CarModel: {
  display: "flex",
  position:"fixed",
  width: "100vw",
  height: "100vh",
  overflow: "hidden", /* Absolutely stops window bars or scaling glitches */
  margin:" 0",
  padding: "0",
  zIndex:"1005",
},



models: {
  position: "relative",
  width: "60vw",
  height: "100vh",
  overflow:"hidden", 
  backgroundColor: "#0b0c10",
  left: "40%",
  zIndex: "1005",
},

modelsimg: {
  width: "100%",
  height: "100%",
  objectFit: "cover", 
  objectPosition: "center center",
},

modelsButton: {
  position: "absolute",
  bottom:" 8%",
  left: "50%",
  transform: "translateX(-50%)",
  zindex:"10",
  padding: "12px 40px",
 backgroundColor: 'black',
  color:"white",
  fontWeight:"200",
  letterSpacing:'0.05em',
  border: "none",
  borderRadius: "25px",
  cursor: "pointer",
  textTransform: "uppercase",
}
}



  return (
    <div style={Style.CarModel}>
      {selectedCar && (
        <div style={Style.models}>
          <img
            src={selectedCar.image}
            alt={selectedCar.alt}
            style={Style.modelsimg}
          />
          <button style={Style.modelsButton}>DISCOVER MORE</button>
        </div>
      )}
    </div>
  );
};

export default Model;
