import React, { useState } from "react";
import "./Links.css"

function Link({FootballStars,onSearch}) {

    const [text, setText] = useState("");

    return(
    <div id="LinkDiv">
        <ul>
            {FootballStars.map(item => <li key={item.id}><a href={item.href}>{item.name}</a></li>)}
        </ul>
    </div>
        
    )
}

export default Link