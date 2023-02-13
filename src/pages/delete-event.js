import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {RegisterHandler} from "../components/auth/register/register.request";
import RegisterForm from "../components/auth/register/register";
import CreateEventForm from "../components/events/create-event";
import {CreateEventHandler} from "../components/events/create-event.request";
import {GetEventHandler} from "../components/events/get-events.request";
import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {DeleteEventHandler} from "../components/events/delete-event.request";

function DeleteEventPage() {

    const eventHandler = DeleteEventHandler;
    const { id } = useParams();


    React.useEffect(() => {
        eventHandler(setIsSuccess, id);
    }, []);

    const [isSuccess, setIsSuccess] = React.useState(false);
    React.useEffect(() => {
        if(isSuccess) {
            navigate('/companyEvents', { replace: true });
        }
    }, [isSuccess]);
    const navigate = useNavigate();

    return (
        <section>
            <ToastContainer />
        </section>
    );
}

export default DeleteEventPage;
