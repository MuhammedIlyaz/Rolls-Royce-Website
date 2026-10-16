import React from "react";
import Herosection from "../components/Hero";

const HomePage = () => {
  const Explore = [
    {
      image:
        "https://i.pinimg.com/1200x/77/5f/f4/775ff4751a6b4cf5ee5a4820b044d5c2.jpg",
      title: "Black Badge Cullinan",
      description:
        "Exquisite materials meet commanding design. An alter ego designed to defy boundaries, wherever it prevails. ",
    },

    {
      image:
        "https://i.pinimg.com/1200x/86/b8/63/86b8636369a274ac9214b44e315673db.jpg",
      title: "Discover Bespoke",
      description:
        "Choose from our exclusive collections or collaborate with our craftspeople and designers to create a Rolls-Royce wholly unique to you. This is Rolls-Royce Bespoke. ",
    },

    {
      image:
        "https://i.pinimg.com/736x/16/d6/04/16d604504f4e161a15dcde34e79c2096.jpg",
      title: "Provenance",
      description:
        "Crafted once, coveted forever. Every Provenance motor car is a testament to enduring excellence.",
    },
  ];

  {/*STYLE SECTION*/}

  const exploreStyle = {
    position: "relative",
    width: "calc(100% - 80px)",
    maxWidth: "1420px",
    margin: "0 auto",
    paddingTop: "clamp(80px, 10vw, 130px)",
  };

  const headingStyle = {
    margin: "0 0 40px",
    textAlign: "center",
  };

  const headingTitleStyle = {
    margin: 0,
    fontFamily: '"Riviera Nights", sans-serif',
    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
    fontWeight: 200,
  };

  const exploreFurtherStyle = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    alignItems: "stretch",
    gap: "24px",
  };

  const sectionExploreStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minWidth: 0,
  };

  const imageStyle = {
    display: "block",
    width: "100%",
    height: "260px",
    objectFit: "cover",
    objectPosition: "center",
  };

  const textStyle = {
    flex: 1,
    minHeight: "190px",
    padding: "18px 18px 25px",
    borderLeft: "1px solid #3b3b3b",
  };

  const titleStyle = {
    margin: "0 0 14px",
    fontWeight: 400,
  };

  const descriptionStyle = {
    margin: 0,
    fontFamily: '"Riviera Nights", sans-serif',
    fontWeight: 200,
    letterSpacing: "0.04em",
    lineHeight: 1.7,
  };

  return (
    <>
      <Herosection />
      <section style={exploreStyle}>
        <div style={headingStyle}>
          <h2 style={headingTitleStyle}>EXPLORE FURTHER</h2>
          <h5>CONTINUE YOUR JOURNEY</h5>
        </div>

        <div style={exploreFurtherStyle}>
          {Explore.map((item) => (
            <div style={sectionExploreStyle}>
              <img src={item.image} alt="image" style={imageStyle} />
              <div style={textStyle}>
                <h3 style={titleStyle}>{item.title}</h3>
                <p style={descriptionStyle}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
