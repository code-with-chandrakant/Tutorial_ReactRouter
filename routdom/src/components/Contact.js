import React from "react";
import { Link } from 'react-router-dom';


export default function Contact() {
    return (
        <div>
            <h1>This is Contact page</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
    )

}