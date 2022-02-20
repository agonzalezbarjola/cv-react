import React from "react";
import "./More.css";

const More = ({ languages, habilities, softwares}) => {
  return (
    <div className="more">
      <div className="divider">
        <span></span>
        <span>Idiomas</span>
        <span></span>
      </div>
      <div className="card"> 
        <p>{languages.language}</p>
        <p>✏️ Nivel escrito: {languages.wrlevel}</p>
        <p>💭 Nivel oral: {languages.splevel}</p>
      </div>
        <div className="divider">
        <span></span>
        <span>Skills</span>
        <span></span>
        </div>
      <div className="habilities card">
        {habilities.map((txt) => (
          <p key={txt}>🔧 {txt}</p>
        ))}
      </div>
      <div className="divider">
        <span></span>
        <span>Softwares</span>
        <span></span>
      </div>
      <div className="softwares card">
        {softwares.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">{item.name}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;
