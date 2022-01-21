import React from "react";
import HeroPic from '../images/photo-grid.png';

export default function Hero() {
    return (
        <div className="hero">
            <img src={HeroPic} className="hero-grid"></img>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}