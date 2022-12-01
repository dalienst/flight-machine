/* eslint-disable no-undef */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/logo1.svg";
import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component {
    state = {
        isOpen: false
    };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    };
  render() {
    return (
    <nav className='navbar'>
        <div className='nav-center'>
            <div className='nav-header'>
                <Link to="/">
                    <img src={logo} alt="Flights" />
                </Link>
                <button
                    type='button'
                    className='nav-btn'
                    onClick={this.handleToggle}
                >
                    <FaAlignRight className='nav-icon' />
                </button>
            </div>
            <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                <li>
                    <Link to="/">General</Link>
                </li>
                <li>
                    <Link to="#contact">Customer Care</Link>
                </li>
                <li>
                    <Link to="#about">Corporate Info</Link>
                </li>
                <li>
                    <Link to="#services">Services</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
  }
}
