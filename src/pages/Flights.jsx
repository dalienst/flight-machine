/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { axiosFlight } from '../api/axios';
import { urls } from '../constants/links';
import Title from "../components/Title";
import { Link } from "react-router-dom";


export default function Flights() {
  const [flights, setFlights] = useState([]);

  const controller = new AbortController();
  const fetchFlight = async () => {
    try {
      const response = await axiosFlight.get(urls.ALLFLIGHTS);
      setFlights(response.data.results);
    } catch (error) {
      toast.error("Flights cannot be retrieved at the moment. We are working on it")
    }
  };

  useEffect(() => {
    fetchFlight();
    return () => {
      controller.abort()
    }
  }, [])
  return (
    <section className="featured-flights">
      <Title title="All Flights" />
      <div className="table-responsive">
        <table className="styled-table" cellSpacing="0">
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
            {flights.map((flight) => (
              <tr key={flight.id}>
                <td>{flight.name}</td>
                <td>{flight.description}</td>
                <td>{flight.route}</td>
                <td>Ksh {flight.price}</td>
                <td>{flight.departure}</td>
                <td>{flight.arrival}</td>
                <td>
                  <Link to={`/flights/${flight.id}/detail`} className="btn-primary">Book a flight</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
