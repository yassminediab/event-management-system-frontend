import React from "react";
import {GetMyEventsHandler} from "../components/events/list-my-events.request";
import MyEventsList from "../components/events/MyEventsList";
import {useNavigate} from "react-router-dom";

function MyEventsPageList() {
    const eventsHandler = GetMyEventsHandler;
    const [events, setEvents] = React.useState(null);

    React.useEffect(() => {
        eventsHandler(setEvents);
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
            <MyEventsList events={events}/>
        );
}

export default MyEventsPageList;
