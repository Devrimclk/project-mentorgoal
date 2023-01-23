import React from "react";

function Card({ title, imageUrl, body, date, imageA }: any) {
  return (
    <div className="card-container1">
      <div className="image-container1">
        <img src={imageUrl} alt="" />
      </div>
             <div className="card-content1">
                <div className="card-date1">
                    <h4>{date}</h4>
                </div>
                <div className="card-title1">
                    <h3>{title}</h3>
                </div>
                <div className="card-body1">
                    <p>{body}</p>
             </div>
    </div>
        <div className="btn1">
            <button className="btn2">
                <a className="lien1">
                    Lire l'article 
                </a>
                <div className="arrow1">
                    <img className="arrow-tall1" src={imageA} alt="" />
                </div>
            </button>
         </div>
    </div>
  );
}

export default Card;
