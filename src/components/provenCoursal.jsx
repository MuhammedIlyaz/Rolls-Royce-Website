import React from "react";
import { useState} from "react";
import Image01 from "/src/assets/image/ProveCourosal/car01.jpg";
import Image02 from "/src/assets/image/ProveCourosal/Car02.jpg";
import Image03 from "/src/assets/image/ProveCourosal/Car_03.jpg";
import Image04 from "/src/assets/image/ProveCourosal/Car04.jpg";
import Image05 from "/src/assets/image/ProveCourosal/Car05.jpg";

const provenCoursal = () => {
  const [courosal, setCourosal] = useState(1);

  const Cars = [
    {
      index: 0,
      Image:  Image01, 
       alt: "car 01",
      head: "Rolls-Royce Ghost",
      Explain: "A high-tech, sophisticated ultra-luxury sedan with a minimalist design philosophy."
    },

    {
      index: 1,
      Image: Image02,
      alt: "car 02",
      head: "Rolls-Royce Cullinan",
      Explain: "A highly capable, all-terrain ultra-luxury SUV with a legendary smooth ride."
    },

    {
      index: 2,
      Image:Image03,
      alt: "car 03",
      head: "Rolls-Royce Spectre",
      Explain: "An all-electric ultra-luxury super coupé for silent, effortless motoring."
    },

    {
      index: 3,
      Image: Image04 ,
      alt: "car 04",
      head: "Rolls-Royce Dawn",
      Explain: "An open-air, four-seat convertible offering sophisticated and uncompromised opulence."
    },

    {
      index: 4,
      Image: Image05 ,
      alt: "car 05",
      head: "Rolls-Royce Boat Tail",
      Explain: "Ultra-exclusive, coachbuilt masterpiece, handcrafted for a single client."
    },
  ];



  return (
    <section id="proveCoursal">
      <h1>Explore Page</h1>

      <style>{`
      #proveCoursal{
        position: relative;
        top: 30rem;
        bottom: 25rem;
        }

        .carousel-view-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          overflow: hidden;
          width: 100%;
          margin: 0 auto;
          padding: 40px 0;
          background: #e6e6e6 ;
        }

        .slide-item {
          transition: transform 0.4s ease, opacity 0.4s ease;
          opacity: 0.4;               
          transform: scale(0.8);       
          display: flex;
          justify-content: center;
          align-items: center;
          width: 25%;                  
        }

        .slide-item img {
          width: 100%;
          height: 60vh;
          object-fit: cover;
          box-shadow: 0px 4px 15px rgba(0,0,0,0.15);
        }

        .slide-item.active {
          opacity: 1;                 
          transform: scale(1.1);       
          width: 45%;                  
          z-index: 2;
        }

        .nav-btn {
          background: rgba(255,255,255,0.7);
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          font-size: 18px;
          z-index: 10;
          border-radius: 50%;
        }
        .nav-btn:disabled { opacity: 0.3; cursor: not-allowed; }
        
        .dotCon { 
        justify-items: center;
        align-items: center;
        margin-top: 15px;
        }

     .val { 
      color: #888; 
      cursor: pointer; 
      margin: 0 5px; 
      font-size: 24px; 
      transition: color 0.2s; }

        .val.active {
          color: black; }

    .dotCon h1 {
      color:  black;
      font-weight: 300;
      font-size: 2.5rem;
      text-align: center;
    }

       .dotCon p {
        color:  black;
        font-weight: 200;
      font-size: 1.2rem;
      letter-spacing: 0.02em;
       }

       
      `}</style>

      <div className="carousel-view-container">
        {Cars.map((Car, index) => {
          let positionClass = "";
          if (index === courosal) {
            positionClass = "active";
          }

          return (
            <div key={Car.index} className={`slide-item ${positionClass}`}>
              <img src={Car.Image} alt={Car.alt} />
            </div>
          );
        })}
      </div>

      <div className="dotCon">
        <div>
          {Cars.map((_, index) => (
            <span
              key={index}
              className={`val ${courosal === index ? "active" : ""}`}
              onClick={() => setCourosal(index)}
            >
              •
            </span>
          ))}
        </div>
        <div className="det-con">
          <h1>{Cars[courosal]?.head}</h1>
          <p>{Cars[courosal]?.Explain}</p>
        </div>
      </div>
    </section>
  );
};

export default provenCoursal;
