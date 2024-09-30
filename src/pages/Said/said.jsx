import React from "react";
import { Said_cards } from "../../components/said_card/said_cards";


export const Said = () => {
    return (
        <section className="said">
            <div className="container">
                <h2 className="said_title">What they’ve said</h2>
                <div className="said_list">
                    <Said_cards
                    title={"Anisha Li"}
                    text={"“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"}
                    />
                    <Said_cards
                    title={"Ali Bravo"}
                    text={"“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"}
                    />
                </div>
                <div className="said_btn">
                    <a className="header_btn" href="#">Get Started</a>
                </div>
                
            </div>
        </section>
    )
    
}