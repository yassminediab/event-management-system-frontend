import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateEventForm from "../components/events/create-event";
import {CreateEventHandler} from "../components/events/create-event.request";
import React from "react";
import {GetEventHandler} from "../components/events/get-events.request";
import {
    useNavigate,
    useParams
} from "react-router-dom";
import EditEventForm from "../components/events/edit-event";
import {EditEventHandler} from "../components/events/edit-event.request";
import EventFeedbackForm from "../components/events/event-feedback";
import {EventFeedbackHandler} from "../components/events/event-feedback.request";

function EventFeedbackPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    React.useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user) {
            navigate('/login', {replace: true});
            window.location.reload();
        }
        if(user?.company?.id) {
            navigate('/companyEvents', {replace: true});
            window.location.reload();
        }
    }, []);
    return (
        <section>
            <h1>Add Feedback for Event</h1>
            <EventFeedbackForm id={id} hook={EventFeedbackHandler} />
            <ToastContainer />
        </section>
    );
}

export default EventFeedbackPage;
