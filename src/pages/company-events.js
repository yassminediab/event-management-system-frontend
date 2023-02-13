import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import CompanyEventsList from "../components/events/CompanyEventsList";
import {GetCompanyEventsHandler} from "../components/events/get-company-events.request";

function CompanyEventsPageList() {

    const eventsHandler = GetCompanyEventsHandler;
    const { id } = useParams();
    const [events, setEvents] = React.useState(null);

    React.useEffect(() => {
        eventsHandler(id,setEvents);
    }, [id]);

    return <CompanyEventsList events={events}/>;
}

export default CompanyEventsPageList;
