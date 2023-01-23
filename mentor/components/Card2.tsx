import React from "react";

function Card2({ title, body, date, imageA }: any) {
  return (
    <div className="card-container2">
             <div className="card-content2">
                <div className="card-date2">
                    <h4>{date}</h4>
                </div>
                <div className="card-title2">
                    <h3>{title}</h3>
                </div>
                <div className="card-body2">
                    <p>{body}</p>
             </div>
    </div>
        <div className="btn2">
            <button>
                <a className="lien2">
                    Lire l'article 
                </a>
                <div className="arrow2">
                    <img className="arrow-tall2" src={imageA} alt="" />
                </div>
            </button>
         </div>
    </div>
  );
}

export default Card2;
