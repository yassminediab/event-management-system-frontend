import classes from "../ui/button.module.css";
import React from "react";
import {RsvpEventHandler} from "./rsvp-company.request";
import {AttendEventHandler} from "./attend-event.request";

function UserItem(props) {
    function submitHandler(event) {
        event.preventDefault();
        AttendEventHandler(props.eventId, props.id);
    }

    return (
        <li className="w3-bar">
            <div className="w3-bar-item">
                <span className="w3-large">Name: {props.name}</span>
            </div>
            <div className="w3-bar-item">
                <span className="w3-large">Email: {props.email}</span>
            </div>
            <div className="row">
                <div className={classes.rb}>
                    <a onClick={submitHandler}  className={classes.buttom}>Mark as attend</a>
                </div>
            </div>
        </li>
    );
}
export default UserItem;
