import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import "./AlbumPage.css";
import sampleImg from '../assets/sample.jpg';

const dummyData = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  title: `Card Title ${i + 1}`,
  text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  image: sampleImg,
}));

const AlbumPage = () => {
  return (
    <>
      <Header />
      <main className="album-main">
        <section className="hero">
          <h1>Album example</h1>
          <p className="hero-description">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so folks
            don’t simply skip over it entirely.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Main call to action</button>
            <button className="secondary-btn">Secondary action</button>
          </div>
        </section>
        <section className="container py-5">
          <div className="row">
            {dummyData.map((item) => (
              <div className="col-md-4 d-flex" key={item.id}>
                <Card {...item} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default AlbumPage;