import EventItem from "./EventItem";
import classes from "./CreateEvent.module.css";
import React, {useRef} from "react";
import {createSearchParams, useNavigate} from "react-router-dom";

function EventsList(props) {
    const titleInputRef = useRef();
    const fromInputRef = useRef();
    const toInputRef = useRef();
    const locationInputRef = useRef();

    const {filters} = props;

    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        if(data) {
            navigate({
                pathname: '/events',
                search: `?${createSearchParams(data)}`,
            });
            window.location.reload();
        }
    }, [data]);
    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();

        const title = titleInputRef.current.value;
        const from = fromInputRef.current.value;
        const to = toInputRef.current.value;
        const location = locationInputRef.current.value;

        const data = {
        };

        if(title) {
            data['keyword'] = title;
        }

        if(to) {
            data['to'] = to;
        }

        if(from) {
            data['from'] = from;
        }

        if(location) {
            data['location'] = location;
        }

        setData(data);
    }

    return (
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                     data-wow-delay="0.1s">
                    <form className={classes.form} onSubmit={submitHandler}>
                        <div className={classes.control}>
                            <label htmlFor='title'>Keyword</label>
                            <input  defaultValue={filters?.keyword} type='text' id='title' ref={titleInputRef} />

                            <label htmlFor='location'>Location</label>
                            <input defaultValue={filters?.location} type='text' id='location' ref={locationInputRef} />
                            <div className={classes.control}>
                                <label htmlFor='date'>From</label>
                                <input defaultValue={filters?.from} type='datetime-local' id='date' ref={fromInputRef} />
                            </div>
                            <div className={classes.control}>
                                <label htmlFor='date'>To</label>
                                  <span id="last"> <input defaultValue={filters?.to} type='datetime-local' id='date' ref={toInputRef} /></span>
                            </div>
                            <div className={classes.actions}>
                                <button>Filter</button>
                            </div>
                        </div>
                    </form>
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
                            actualDate={event.actualDate}
                        />
                    ))}
                    {props.events?.length === 0 && <h2 className="mt-2">No Events Found</h2>}
                </div>
            </div>
        </div>
    );
}

export default EventsList;
