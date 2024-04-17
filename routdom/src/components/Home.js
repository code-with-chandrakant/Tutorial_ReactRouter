import React from "react";
import {link} from "react-router-dom";



export default function Home(){
    return(
        <div>
            <h1>This is home page</h1>
            <link to='/about'>Go to about</link>
            <link to='/contact'>Go to contect</link>
        </div>
    )
}