import React from "react";

export const Manage_cards  = ({number, title, text}) => {
    return (
        <ul className="manage_list">
                        <li className="manage_item">
                            <span className="manage_num">{number}</span>
                            <div>
                                <h3 className="manage_subtile">{title}</h3>
                                <p className="manage_info">{text}</p>
                            </div>
                        </li>
                    </ul>
    )
}