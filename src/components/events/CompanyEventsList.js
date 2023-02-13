import EventItem from "./EventItem";
import React from "react";

function CompanyEventsList(props) {
    return (
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                     data-wow-delay="0.1s">

                </div>
                <div className="row g-4">
                    {props.events?.map((event) => (
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
                        />
                    ))}
                    {props.events?.length === 0 && <h2 className="mt-2">No Events found</h2>}
                </div>
            </div>
        </div>
    );
}

export default CompanyEventsList;
