/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { urls } from '../constants/links';
import { axiosFlight } from '../api/axios';
import Title from "./Title";

export default function FeaturedFlights() {
    const [features, setFeatures] = useState([]);

    const controller = new AbortController();
    const fetchFeatured = async () => {
        try {
            const response = await axiosFlight.get(urls.FEATURED);
            setFeatures(response.data.results);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchFeatured();
        return () => {
            controller.abort();
        }
    }, [])

  return (
    <section className='featured-flights'>
        <Title title="our featured flights"/>
        <div className='table-responsive'>
            <table className='styled-table' cellSpacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Route</th>
                        <th>Price</th>
                        <th>Departure</th>
                        <th>Arrival</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {features.map((feature) => (
                        <tr key={feature.id}>
                            <td>{feature.name}</td>
                            <td>{feature.description}</td>
                            <td>{feature.route}</td>
                            <td>Ksh {feature.price}</td>
                            <td>{feature.departure}</td>
                            <td>{feature.arrival}</td>
                            <td>
                                <button className='btn-primary'>Book a flight</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </section>
  )
}
