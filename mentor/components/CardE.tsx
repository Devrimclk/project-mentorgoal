import React from "react";
import Entretien from "./Entretien";
function CardE({ title, imageUrl, body, date, imageA }: any) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
             <div className="card-content">
                <div className="card-date">
                    <h4>{date}</h4>
                </div>
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
             </div>
    </div>
        <div className="btn">
          <Entretien/>
            <button>
                <a className="lien">
                    Lire l'article 
                </a>
                <div className="arrow">
                    <img className="arrow-tall" src={imageA} alt="" />
                </div>
            </button>
         </div>
    </div>
  );
}

export default CardE;
