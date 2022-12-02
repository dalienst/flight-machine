import React from "react";
import Title from "./Title";

export default function Contacts() {
    const contacts =  [
        {
            id: 1,
            // Add icon
            title: "Email",
            info: "jumanjitravels@gmail.com"
        },
        {
            id: 2,
            // Add icon
            title: "Telephone",
            info: "0123456789"
        },
        {
            id: 3,
            // Add icon
            title: "WhatsApp",
            info: "0123456789"
        },
        {
            id: 4,
            // Add icon
            title: "Twitter",
            info: "@JumanjiTravels"
        },
        {
            id: 5,
            // Add icon
            title: "Facebook",
            info: "@JumanjiTravels"
        }
    ]
    return (
        <section className="featured-flights" id="contact">
            <Title title="Our Contacts" />
                <div className="table-responsive">
                    <table className="styled-table" cellSpacing="0">
                        <tbody>
                            {contacts.map((contact) => (
                            <tr key={contact.id}>
                                <td>{contact.title}</td>
                                <td>{contact.info}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
        </section>
    )
}