import UserItem from "./UserItem";
import classes from "../ui/button.module.css";
import React from "react";

function UsersList(props) {
    return (
        <>
        <div className="w3-container">
            <h2>List Of Rsvp</h2>
            <ul className="w3-ul w3-card-4">
                {props.rsvp?.map((user) => (
                    <UserItem
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        eventId={props.eventId}
                    />
                ))}
            </ul>
        </div>
            <br/>
            <br/>
            <br/>

            <div className="w3-container">
                <h2>List Of Attendance</h2>
                <ul className="w3-ul w3-card-4">
                    {props.attendance?.map((user) => (
                        <li className="w3-bar">
                            <div className="w3-bar-item">
                                <span className="w3-large">Name: {user.name}</span>
                            </div>
                            <div className="w3-bar-item">
                                <span className="w3-large">Email: {user.email}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="w3-container">
                <h2>List of Feedback</h2>
                <ul className="w3-ul w3-card-4">
                    {props.feedback?.map((user) => (
                        <li className="w3-bar">
                            <div className="w6-bar-item">
                                <span className="w3-large">Email: {user.user.email}</span>
                            </div>
                            <div className="w6-bar-item">
                                <span className="w3-large">Feedback: {user.feedback}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
</>
    );
}
export default UsersList;
