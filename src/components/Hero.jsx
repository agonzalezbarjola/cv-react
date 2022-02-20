import React from "react";
import "./Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <div className="container">
      <img src={hero.image} alt="" />
      </div>
      
      <div className="card">
      <h2>
        {hero.name} 
        </h2>
        <h3 className="divider">
        {hero.principal} </h3>
      
        <p>📍{hero.city} </p>
        <p>🎉{hero.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + hero.email}>
            agonzalezbarjola@gmail.com
          </a>
        </p>
        <p>💻<a href={hero.gitHub}>
            GitHub
          </a></p>
         
      </div>
    </div>
  );
};

export default Hero;