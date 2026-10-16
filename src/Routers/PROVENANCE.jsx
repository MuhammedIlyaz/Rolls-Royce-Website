import { useState } from "react";
import ProvenHero from "/src/assets/image/Proven_hero.jpg";
import Courosal from "/src/components/provenCoursal.jsx";

const PROVENANCE = () => {
  const [top, setTop] = useState({});

  function showbelow(index) {
    setTop((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }

  const deatils = [
    {
      top: "How is Provenance different from any other pre-owned Rolls-Royce?",
      below:
        "Provenance is the only Rolls-Royce certified collection of the brand’s pre-owned motor cars. Across the globe, our technicians take meticulous care to ensure that the Rolls-Royce standard of excellence is upheld. The collection features Goodwood era motor cars built after 2003, with every motor car required to undergo verified testing.",
    },

    {
      top: "How long is the warranty, servicing and Roadside Assistance cover?",
      below:
        "Two years (outside North America). Please contact the dealer for more information.",
    },
    {
      top: "How do I access Provenance’s Roadside Assistance in an emergency?",
      below:
        "If you need to contact us for Roadside Assistance, please do so on the numbers found here.",
    },
    {
      top: "What additional servicing is included within the Provenance programme?",
      below:
        "This includes any item requiring replacement within the condition-based servicing standards, including oil, brakes and filters. Tyres not included.",
    },
    {
      top: "Will taking my Provenance car abroad void its warranty?",
      below:
        "The warranty, servicing and roadside packages are region-based, so the answer will vary depending on where you take your motor car. We suggest checking directly with your dealer.",
    },
  ];

  return (
    <section id="Proven">
      <style>
        {`
#Proven{
  background-color: white;
  height: 300vh;
}

.proven-img{
  position: relative;
  height: 50rem;

}

.proven-img img{
  height: 100%;
  width: 100%;

}

.proventext{
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
}




.proventext span{
  font-size: 5rem;
  font-weight: 300;
}

.proventext p {
  font-size: 1.5rem;
}



.ProvenDel{
  position: absolute;
  width: calc(100% - 80px);
  max-width: 1420px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 100px;
  color: #050505;
  text-align: center;
}

.provendelh{
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 0.04em;
}

.ProvenDel p {
  font-weight: 300;
    letter-spacing: 0.04em;
    line-height: 1.8;
}


.Provenp{
  margin: 3% 0;
  padding: 0 22%;

}


/* Hero Button */ 
.provenBtn button {
 display: inline-block;
 border-radius: 50px;
 border: none;
 background-color: transparent;
 color: black;
 border: 1px solid black;
 text-align: center;
 font-size: clamp(0.6rem , 5vw , 0.9rem);
 padding: 12px;
 width: 250px;
 transition: all 0.5s;
 cursor: pointer;
 margin: 10px;
 font-weight: 400;
 letter-spacing: 0.06em;
}

.provenBtn button span {
 cursor: pointer;
 display: inline-block;
 position: relative;
 transition: 0.5s;
 font-weight: 300;
 letter-spacing: 0.05em;
}

.provenBtn button span:after {
 content: '⤏';
 position: absolute;
 opacity: 0;
 top: 0;
 right: -15px;
 transition: 0.5s;
}

.provenBtn button:hover span {
 padding-right: 15px;
}

.provenBtn button:hover span:after {
 opacity: 1;
 right: 0;
}

.Provenance_del{
        position: relative;
        width: calc(100% - 80);
        max-width: 1420px;
        padding: 0 20%;
        left: 50%;
        transform: translateX(-50%);
        color: #050505;
        top: 40rem;
       }

     #headPro{
        display: flex;
        justify-content: center;
        font-size: 2rem;
        font-weight: 300;
        letter-spacing: 0.05rem;
        padding-bottom: 20px;
        }

        .Prodetails{
          display: flex;
          flex-direction: column;
          align-items: center;
          border-bottom: 1px solid black; 
   
        }

        #TopDel{
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0 10px;
          font-weight: 400;
          font-size: 1rem;
        }

        #TopDel span{
          font-size: 1.3rem;
          cursor: pointer;
        }

        #belowDel{
          line-height: 1.5;
          letter-spacing: 0.03em;
          text-align: justify;
          font-weight: 300;
          font-size: 1rem;

        }

      
      
      `}
      </style>
      <div className="proven-img">
        <img src={ProvenHero}></img>
        <div className="proventext">
          <span>PROVENANCE</span>
          <p>CERTIFIED PRE-OWNED</p>
        </div>
      </div>

      <div className="ProvenDel">
        <span className="provendelh">CRAFTED ONCE, COVETED FOREVER</span>
        <div className="Provenp">
          <p>
            An official welcome into the brand’s universe, Provenance is a
            recognition of your discerning appreciation for true automotive
            artistry.
          </p>

          <p>
            Each motor car is a testament to enduring craftsmanship. A
            world-renowned team of technicians across the globe re-examine every
            Provenance motor car to ensure its future is as brilliant as its
            past.
          </p>
        </div>

        <div className="provenBtn">
          <button>
            <span>CONTACT DEALER</span>
          </button>
          <button>
            <span>DISCOVER INVENTORY</span>
          </button>
        </div>
      </div>

      <Courosal />

      <div className="Provenance_del">
        <span id="headPro">PROVENANCE IN DETAIL</span>

        {deatils.map((detail, index) => (
          <div className="Prodetails" key={index}>
            <div id="TopDel">
              <p>{detail.top}</p>
              <span onClick={() => showbelow(index)}>
                {top[index] ? "-" : "+"}
              </span>
            </div>
            {top[index] && <p id="belowDel">{detail.below}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PROVENANCE;
