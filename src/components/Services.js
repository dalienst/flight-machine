import React, { Component } from "react";
import Title from "./Title";

export default class Services extends Component {
    state = {
        services: [
            {
                title: "Special Care",
                info: 
                    "Wheelchair provision for people with disability, Inflight assistance & airport assistance"
            },
            {
                title: "Change Flights",
                info: 
                    "Reschedule your flight or book another one. Schedule a return date"
            },
            {
                title: "Buggage Tracking",
                info: 
                    "Tracking your luggage to prevent loss. Finding it if it is lost"
            },
            {
                title: "Trip Advisor",
                info: 
                    "Be well conversant with your destination in advance"
            }

        ]
    };
    render() {
        return (
            <section className="services" id="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map(item => {
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