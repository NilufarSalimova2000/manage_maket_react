import React from "react";
import Imag from "../assets/said_img.png"

export const Said = () => {
    return (
        <section className="said">
            <div className="container">
                <h2 className="said_title">What they’ve said</h2>
                <ul className="said_list">
                    <li className="said_item">
                        <img className="said_img" src={Imag} alt="img" />
                        <h3 className="said_subtitle">Anisha Li</h3>
                        <p className="said_text"> “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                    </li>
                    <li className="said_item">
                        <img className="said_img" src={Imag} alt="img" />
                        <h3 className="said_subtitle">Ali Bravo</h3>
                        <p className="said_text"> “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
                    </li>
                </ul>
                <div className="said_btn">
                    <a className="header_btn" href="#">Get Started</a>
                </div>
                
            </div>
        </section>
    )
    
}