import EventItem from "./EventItem";
import React from "react";

function UserEventsList(props) {
    return (
        <>
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                     data-wow-delay="0.1s">
                    <h3>Upcoming Events</h3>
                </div>
                <div className="row g-4">
                    {props.upcomingEvents?.map((event) => (
                        <EventItem
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            description={event.description}
                            location={event.location}
                            date={event.date}
                            time={event.time}
                            isRsvp={event.isRsvp}
                            numberOfRsvp={event.numberOfRsvp}
                            removeButton={true}
                        />
                    ))}
                    {props.upcomingEvents?.length === 0 && <h2 className="mt-2">No Upcoming Events</h2>}
                </div>
            </div>
        </div>

            <div className="container-xxl py-5">
                <div className="container px-lg-5">
                    <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                         data-wow-delay="0.1s">
                        <h3>Past Events</h3>
                    </div>
                    <div className="row g-4">
                        {props.pastEvents?.map((event) => (
                            <EventItem
                                key={event.id}
                                id={event.id}
                                title={event.title}
                                description={event.description}
                                location={event.location}
                                date={event.date}
                                time={event.time}
                                isRsvp={event.isRsvp}
                                numberOfRsvp={event.numberOfRsvp}
                                removeButton={true}
                                addFeedback={true}
                            />
                        ))}
                        {props.pastEvents?.length === 0 && <h2 className="mt-2">No Past Events</h2>}
                    </div>
                </div>
            </div>
            </>
    );
}

export default UserEventsList;
