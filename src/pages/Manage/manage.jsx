import React from "react";
import { Manage_cards } from "../../components/manage_card/card";

export const Manage = () => {
    return (
        <section className="manage">
            <div className="container">
                <div className="manage_wrapper">
                    <div>
                        <h2 className="manage_title">What’s different about Manage?</h2>
                        <p className="manage_text">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
                    </div>
                    <div>
                        <Manage_cards
                        number={"01"}
                        title={"Track company-wide progress"}
                        text={"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."}
                        />
                        <Manage_cards
                        number={"02"}
                        title={"TAdvanced built-in reports"}
                        text={"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."}
                        />
                        <Manage_cards
                        number={"03"}
                        title={"Everything you need in one place"}
                        text={"Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}