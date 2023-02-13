import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {RegisterHandler} from "../components/auth/register/register.request";
import RegisterForm from "../components/auth/register/register";
import CreateEventForm from "../components/events/create-event";
import {CreateEventHandler} from "../components/events/create-event.request";
import {useNavigate} from "react-router-dom";
import React from "react";

function CreateEventPage() {
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
            <h1>Create Event</h1>
            <CreateEventForm hook={CreateEventHandler} />
            <ToastContainer />
        </section>
    );
}

export default CreateEventPage;
