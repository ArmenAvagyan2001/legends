import React, { useState } from "react";
import "./BiographyItem.css"

function BiographyItem ({item}) {
    const [value, setValue] = useState(false)
    return(
        <div id="BiographyItemDiv">
            <h2 id="BiographyItemHeader">{item.name}</h2>
            {value? null :
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-5 ">
                            <h5 id="BiographyItemHeader_2">
                                <span> FULL NAME: </span> {item.FullName}<br />
                                <span>BORN: </span> {item.date}<br />
                                <span>NATIONALITY: </span> {item.nationality}<br />
                                <span>Growth: </span> {item.growth} <br />
                                <span>Instagram: </span>{item.instagram}
                            </h5>
                        </div>
                        <div className="col">
                            <img id="BiographyItemImg" src={item.photoSrc} />
                        </div>
                    </div>
                </div> 
            }
            
            <div id="BiographyItemDiv">
                {value ? <img id="BiographyItemImg_2" src={item.photoSrc}/> : null}{ value ? <p id="paragraph">{item.biography}</p>  : null }
            </div>
            <button onClick={(e) => {
                e.preventDefault();
                setValue(!value)
            }} 
            className="btn btn-primary" 
            id="BiographyItemButton">
                {value? "Close biography " + item.name : "Open biography " + item.name} 
            </button>
        </div>
    )
}

export default BiographyItem