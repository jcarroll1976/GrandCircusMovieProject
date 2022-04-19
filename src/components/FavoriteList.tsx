import React from "react";
import { Link, useParams } from "react-router-dom";
import './FavoriteList.css';

const FavoriteList = () => {
    return (
       <div className="FavoriteList">
           <h1>Your favorite list</h1>
           <Link to={"/"}>To go back to main menu</Link>
       </div>
    );
};

export default FavoriteList