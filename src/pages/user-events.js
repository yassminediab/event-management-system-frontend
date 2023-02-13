import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import CompanyEventsList from "../components/events/CompanyEventsList";
import {GetCompanyEventsHandler} from "../components/events/get-company-events.request";
import UserEventsList from "../components/events/UserEventsList";
import {GetMyUpcomingEventsHandler} from "../components/events/list-my-upcoming-events.request";
import {GetMyPastHandler} from "../components/events/list-my-past-events.request";

function UserEventsPageList() {

    const eventsHandler = GetMyUpcomingEventsHandler;
    const pastEventsHandler = GetMyPastHandler;
    const [events, setEvents] = React.useState(null);
    const [pastEvents, setPastEvents] = React.useState(null);

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

    React.useEffect(() => {
        eventsHandler(setEvents);
        pastEventsHandler(setPastEvents);
    }, []);

    return <UserEventsList upcomingEvents={events} pastEvents={pastEvents}/>;
}

export default UserEventsPageList;
