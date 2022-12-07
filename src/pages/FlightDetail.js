/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { axiosFlight } from "../api/axios";
import Title from "../components/Title";
import { useParams } from "react-router-dom";
import Modal from "../layouts/Modal";

const FlightDetail = () => {
  const { id } = useParams();
  const [flightDetail, setFlightDetail] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const controller = new AbortController();
  const fetchFlight = async () => {
    try {
      const response = await axiosFlight.get(`flight/${id}/`);
      setFlightDetail(response.data);
    } catch (error) {
      toast.error(
        "Flights cannot be retrieved at the moment. We are working on it"
      );
    }
  };

  useEffect(() => {
    fetchFlight();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section className="featured-flights">
      <Title title={flightDetail?.name} />
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
            <tr>
              <td>{flightDetail?.name}</td>
              <td>{flightDetail?.description}</td>
              <td>{flightDetail?.route}</td>
              <td>Ksh {flightDetail?.price}</td>
              <td>{flightDetail?.departure}</td>
              <td>{flightDetail?.arrival}</td>
              <td>
                <button className="btn-primary" onClick={() => setIsOpen(true)}>
                  Book
                </button>
                {isOpen && (
                  <Modal setIsOpen={setIsOpen} flight={flightDetail} />
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
 export default FlightDetail;