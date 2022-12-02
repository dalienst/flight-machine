import React, { Component } from "react";
import Title from "./Title";

export default class About extends Component {
    state = {
        about: [
            {
                title: "Vision",
                info: 
                    "Our quest is to manage business travel and fulfill vacation desires through our commitment to personalized world class service."
                    
            },
            {
                title: "Office Location",
                info: `You can find us at:\n
                - Nairobi: Garden City Mall\n
                - Mombasa: City Mall\n
                - Kisumu: Mega City Mall`
            },
            {
                title: "Privacy Policy",
                info: `We collect and use your information for the purpose
                 of your own safety. We do not disclose your information to
                 any third party`
            }
        ]
    };
    render() {
        return (
            <section className="services" id="about">
                <Title title="about us" />
                <div className="services-center">
                    {this.state.about.map(item => {
                        return (
                            <article key={`item-${item.title}`} className="services">
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}