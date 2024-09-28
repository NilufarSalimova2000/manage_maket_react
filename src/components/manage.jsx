import React from "react";

export const Manage = () => {
    return (
        <section className="manage">
            <div className="container">
                <div className="manage_wrapper">
                    <div>
                        <h2 className="manage_title">What’s different about Manage?</h2>
                        <p className="manage_text">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
                    </div>
                    <ul className="manage_list">
                        <li className="manage_item">
                            <span className="manage_num">01</span>
                            <div>
                                <h3 className="manage_subtile">Track company-wide progress</h3>
                                <p className="manage_info">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                            </div>
                        </li>
                        <li className="manage_item">
                            <span className="manage_num">02</span>
                            <div>
                                <h3 className="manage_subtile">Advanced built-in reports</h3>
                                <p className="manage_info">Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                            </div>
                        </li>
                        <li className="manage_item">
                            <span className="manage_num">03</span>
                            <div>
                                <h3 className="manage_subtile">Everything you need in one place</h3>
                                <p className="manage_info">Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}