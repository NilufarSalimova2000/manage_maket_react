import React from "react";
import HeroImg from "../../assets/hero_img.svg"

export const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero_wrapper">
                    <div>
                        <h2 className="hero_title">Bring everyone together to build better products.</h2>
                        <p className="hero__text">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                        <a className="header_btn" href="#">Get Started</a>
                    </div>
                    <div>
                        <img src={HeroImg} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    )
}