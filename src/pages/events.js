import EventsList from "../components/events/EventsList";
import React from "react";
import {GetEventsHandler} from "../components/events/list-events.request";
import {useNavigate} from "react-router-dom";

function EventsPageList() {

    const eventsHandler = GetEventsHandler;
    const [events, setEvents] = React.useState(null);
    const [filters, setFilters] = React.useState(null);

    React.useEffect(() => {
        const params = {};
        const queryParams = new URLSearchParams(window.location.search);
        queryParams.forEach((value, key) => {
            params[key] = value;
        });
        setFilters(params);
        eventsHandler(setEvents, params);
    }, []);

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

    return <EventsList events={events} filters = {filters}/>;
}

export default EventsPageList;
