import React, {useState, useEffect} from 'react'
import { BsTelephone } from "react-icons/bs";
export default function Navbar() {
  return (
    <div>
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
    <nav>
        <ul className="liste">
            <a href='/'><li className="items">Plateforme emploi</li></a>
            <a href='/'><li className="items">Accompagnement</li></a>
            <a href='/'><li className="items">Notre Adn</li></a>
            <a href='/'><li className="items">Nos offres</li></a>
            <a href='/'><li className="num"><BsTelephone /> 01 84 80 09 40</li></a>
            <a href='/co'><li className="seco">Se connecter</li></a>
        </ul>
        <button className="btn4">BTN</button>
        </nav>
    </div>
  )
}
