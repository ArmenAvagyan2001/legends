import React, { useState } from "react";
import BiographyItem from "./biographyItem/BiographyItem";
import Link from "./Links/Links";
import "./Biography.css"

function Biography({FootballStars}) {
    const [text, setText] = useState("")
    return (
        <div className="container-fluid">
            <div className="row">
                <div id="Biography" className="col-10">
                    <div id="divSearch">
                        <h3 id="headerSearch">Serach legend</h3>
                    </div>
                    <div id="divSearch2">
                        <input type="text" id="inputSearch" placeholder="SEARCH LEGEND" value={text} onChange={(e) => setText(e.target.value)}/>
                    </div>
                    
                    {
                        FootballStars.map((item) => {
                            if(item.name.toUpperCase().includes(text) || item.name.toLowerCase().includes(text)){
                                return  <BiographyItem item={item} key={item.id}/>
                            }
                        })
                    }
                    
                </div>
                <div id="Link" className="col-2">
                    <Link FootballStars={FootballStars}/>
                </div>
            </div>
            
        </div>
    )
}

export default Biography