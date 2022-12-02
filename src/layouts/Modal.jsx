/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Formik, Form, Field } from "formik";
import React, { useState, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { axiosFlight } from "../api/axios";
import { urls } from "../constants/links";

const Modal = ({ setIsOpen, flight }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Fill in to book your flight</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>

          <div className="modalContent">
            <Formik
              initialValues={{
                name: "",
                contact: "",
                email: "",
                flight: flight.name,
                date: "",
              }}
              onSubmit={async (values) => {
                const formData = new FormData();
                formData.append("name", values.name);
                formData.append("contact", values.contact);
                formData.append("email", values.email);
                formData.append("flight", values.flight);
                formData.append("date", values.date);
                try {
                  await axiosFlight.post(urls.BOOK, formData);
                  toast.success(
                    "Await confirmation from Jumanji Travellers via email"
                  );
                  setIsOpen(false);
                } catch (error) {
                  toast.error("Booking unsuccessful. Try again later");
                }
              }}
            >
              {({ touched }) => (
                <Form className="profile-card">
                  <div className="update-input-entry">
                    <label htmlFor="name">Full Name</label>
                    <Field name="name" className="input-field" />
                  </div>

                  <div className="update-input-entry">
                    <label htmlFor="contact">Phone Number</label>
                    <Field name="contact" className="input-field" />
                  </div>

                  <div className="update-input-entry">
                    <label htmlFor="email">Your Email</label>
                    <Field name="email" type="email" className="input-field" />
                  </div>

                  <div className="update-input-entry">
                    <label htmlFor="flight">Flight Name</label>
                    <Field name="flight" className="input-field" />
                  </div>

                  <div className="update-input-entry">
                    <label htmlFor="date">Preferred Date of Travel</label>
                    <Field name="date" type="date" className="input-field" />
                  </div>

                  <button type="submit" className="btn-primary">
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
