import React from "react";
import "./User.css";
import Card from "../../shared/components/UI-Elements/Card";
import Avatar from "../../shared/components/UI-Elements/Avatar"
import { Link } from "react-router-dom";

export default function User(props) {
  return (
    <li className="user-data">
        <Card className="user-Card">
        <Link to={`/${props.id}/places`}>
          <div className="user_Image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user_Name">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
          </Link>
        </Card>
    </li>
  );
}
