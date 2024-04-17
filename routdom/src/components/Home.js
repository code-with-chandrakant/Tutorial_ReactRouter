import React from "react";
import { Link } from 'react-router-dom';



export default function Home() {
    return (
        <div>
            <h1>This is Home page</h1>
            <ul>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}