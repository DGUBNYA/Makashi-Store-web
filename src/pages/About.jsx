import React from "react";
import "../csss/about.css";
import Store from "../components/collection/IMAGE/about/store-min.png";
import Boss from "../components/collection/IMAGE/about/about.png";

const About = () => {
  return (
    <div className="about-bord">
      <div className="about-cover">
        <img className="store-img" src={Store} alt="store_image" />
        <div className="about-moto">
          <button>professionalism</button>
          <button>reliability</button>
          <button>style</button>
        </div>

        <p>
          We believe in a world where you have total freedom to be you, without
          judgement. To experiment. To express yourself. To be brave and grab
          life as the extraordinary adventure it is. So we make sure everyone
          has an equal chance to discover all the amazing things they’re capable
          of – no matter who they are, where they’re from or what looks they
          like to boss. We exist to give you the confidence to be whoever you
          want to be.
        </p>
      </div>
      <div className="about-ketty">
        <img className="ketty-img" src={Boss} alt="ketty_image" />
        <section className="ketty-paragraph">
          <h2>Ketty Milton</h2>
          <h4>fashion design & Big BOSSS</h4>
          <p>
            How did the business start? "My MAKASHI brand in 2012 out of a<br />
            passion to express my love for color and pattern, in an item that is
            <br />
            actually wearable art. A garment is a very versatile fashion
            <br />
            accessory, which gives a great scope for expression to the style and
            <br />
            personal taste of the wearer. In the early years of the brand, I
            <br />
            printed every I made a garment myself in a silk printing workshop
            <br />
            that I built in a studio in Tel Aviv. Today, my printed clothes are
            <br />
            made in Italy with Italian quality."
          </p>
        </section>
      </div>
      <section className="our-products">
        <h2>
          What is special <br />
          about our <br />
          products?
        </h2>
        <p>
          "The uniqueness of the products is our distinct and daring style
          <br /> and the original pictorial language I developed. <br />A
          contemporary neo-ethnic style, aware of seasonal trends
          <br /> but at the same time eternal and temporary. <br />
          The design process always begins with inspiration,
          <br /> searching and mixing color and countless drawn sketches.
          <br /> Slowly the design takes shape and style Distinct, literally a
          language of its own.
          <br /> The hand drawings are scanned into the computer and I create
          the final design and composition,
          <br /> polishing and cleaning. Creating a new formal and colorful
          story."
        </p>
      </section>
    </div>
  );
};

export default About;
