import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {GetMyEventsHandler} from "../components/events/list-my-events.request";
import MyEventsList from "../components/events/MyEventsList";
import UsersList from "../components/events/RsvpList";
import {GetEventRsvpHandler} from "../components/events/list-rsvp.request";
import {GetEventAttendanceHandler} from "../components/events/list-attendance.request";
import {GetEventFeedbackHandler} from "../components/events/list-feedback.request";

function UsersPageList() {
    const { id } = useParams();
    const rsvpHandler = GetEventRsvpHandler;
    const attendanceHandler = GetEventAttendanceHandler;
    const feedbackHandler = GetEventFeedbackHandler;
    const [rsvp, setRsvp] = React.useState(null);
    const [attendance, setAttendance] = React.useState(null);
    const [feedback, setFeedback] = React.useState(null);

    React.useEffect(() => {
        attendanceHandler(id,setAttendance);
        rsvpHandler(id,setRsvp);
        feedbackHandler(id,setFeedback);
    }, []);

    const navigate = useNavigate();
    React.useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user) {
            navigate('/login', {replace: true});
            window.location.reload();
        }
        if(!user?.company?.id) {
            navigate('/companies', {replace: true});
            window.location.reload();
        }
    }, []);

    return (
            <UsersList rsvp={rsvp} attendance={attendance} eventId={id} feedback={feedback}/>
        );
}

export default UsersPageList;
