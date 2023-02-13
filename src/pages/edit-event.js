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

function EditEventPage() {
    const eventHandler = GetEventHandler;
    const [event, setEvent] = React.useState(null);
    const { id } = useParams();

    React.useEffect(() => {
        eventHandler(id,setEvent);
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
        <section>
            <h1>Edit Event</h1>
            <EditEventForm event={event} hook={EditEventHandler} />
            <ToastContainer />
        </section>
    );
}

export default EditEventPage;
