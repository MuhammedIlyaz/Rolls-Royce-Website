import React from "react";
import Hero from "../components/Hero";
import Heroimg from "/src/assets/image/RR_IG.jpg";

const InspireGreatness = () => {
  const Style = {
    InspireGreatness: {
      width: "calc(100% -80px)",
      maxWidth: "1420px",
      left: "50%",
      marginTop: "10%",
      transform: "translateX(-50%)",
      position: "relative",
    },

    imageIG: {
      position: "relative",
      width: "100%",
      height: "90vh",
      minHeight: "560px",
      maxHeight: "950px",
      backgroundImage: `linear-Gradient( rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.20)) , url(${Heroimg})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      overflow: "hidden",
      top: 0,
      left: 0,
      right: 0,
    },

    textIG: {
      position: "absolute",
      margin: "8% 0",
      left: "50%",
      transform: "translateX(-50%)",
    },

    IGTh1: {
      letterSpacing: "0.04em",
      fontWeight: "lighter",
      fontSize: "2.8rem",
    },

    IGExplain: {
      width: "calc(100% - 80px)",
      maxWidth: "1420px",
      textAlign: "center",
      margin: "5% auto"
    },


    IGExplainh3: {
      letterSpacing: " 0.04em",
      fontWeight: "lighter",
      fontSize: "2.8rem",
    },

    IGExplainP: {
      padding: "0 20rem",
      fontWeight: "200",
      lineHeight: "1.5",
    },

    Button :{
      marginTop: "2%",
      padding: "12px",
       width: "250px",
       borderRadius: "20px",
        backgroundColor:" transparent",
         color: "white",
         border: "1px solid white",
         fontSize: "0.9rem",
         letterSpacing: "0.04em",
         border: "1px solid white"
        }

    
  };

  return (
    <section>
      <div className="imageIG" style={Style.imageIG}>
        <div style={Style.textIG} id="IGT">
          <h1 style={Style.IGTh1}>INSPIRING GREATNESS</h1>
        </div>
      </div>

    
        <div style={Style. IGExplain}>
          <h3 style={Style.IGExplainh3}>INSPIRING GREATNESS SERIES</h3>

          <p style={Style.IGExplainP}>
            This inspirational series from Rolls-Royce offers a window into the
            worlds of those defying the ordinary. Discover stories from
            remarkable individuals who are on unrelenting quests for greatness.
          </p>

          <button style={Style. Button}>WATCH ALL EPISODES </button>
        </div>
    </section>
  );
};

export default InspireGreatness;
