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
                <Link to="/#home">
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
                    <Link to="/#home">General</Link>
                </li>
                <li>
                    <a href="/#contact">Customer Care</a>
                </li>
                <li>
                    <a href="/#about">Corporate Info</a>
                </li>
                <li>
                    <a href="/#services">Services</a>
                </li>
            </ul>
        </div>
    </nav>
  )
  }
}
