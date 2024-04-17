import React from "react";
import { Link } from 'react-router-dom';


export default function About() {
    return (
        <div>
            <h1>This is About page</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}