import React from "react";
import Imag from "../../assets/said_img.png"

export const Said_cards = ({title, text}) => {
    return (
        <ul className="said_list">
                    <li className="said_item">
                        <img className="said_img" src={Imag} alt="img" />
                        <h3 className="said_subtitle">{title}</h3>
                        <p className="said_text"> {text}</p>
                    </li>
                </ul>
    )
}