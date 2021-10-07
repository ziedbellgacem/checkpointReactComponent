import React from "react";
import myPhoto  from './profile.jpg';
import "./photo.css";



function Photo(){
    return(
        <img className="image" src={myPhoto} />
    )
}

export default Photo ;