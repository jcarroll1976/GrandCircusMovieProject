import React from "react";
import { Link, useParams } from "react-router-dom";
import './FavoriteList.css';

const FavoriteList = () => {
    return (
       <div className="FavoriteList">
           <ul>

           </ul>
           <Link to={"/"}>To go back to main menu</Link>
       </div>
    );
};

export default FavoriteList