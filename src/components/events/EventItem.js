import React from "react";
import {Link} from "react-router-dom";
import {RsvpEventHandler} from "./rsvp-company.request";

function EventItem(props) {
    const [isSuccess, setIsSuccess] = React.useState(false);
    React.useEffect(() => {
    }, [isSuccess]);

    const [isRsvp, setIsRsvp] = React.useState(props.isRsvp);

    function submitHandler(event) {
        event.preventDefault();
        setIsRsvp(!isRsvp);
        RsvpEventHandler(props.id, setIsSuccess);
    }

    return (
        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                <div class="service-icon flex-shrink-0">
                    <i class="fa fa-calendar fa-2x"></i>
                </div>
                <h5 class="mb-3">{props.title}</h5>
                <p>{props.location}</p>
                <h3>{props.date}{props.time}</h3>

                <p>{props.description}</p>
                <p>Number of going : {props.numberOfRsvp}</p>
                { !props.removeButton && new Date(props.actualDate) > new Date()&& <a class="btn px-3 mt-auto mx-auto" onClick={submitHandler}>{isRsvp ? 'Not Going ?' : 'Going'}</a> }
                { !props.removeButton && new Date(props.actualDate) < new Date()&& <p>Event is done</p> }
                { props.addFeedback && <Link class="btn px-3 mt-auto mx-auto" to={`/events/${props?.id}/feedback`}>{'Add Feedback'}</Link> }

            </div>
        </div>
    );
}
export default EventItem;


