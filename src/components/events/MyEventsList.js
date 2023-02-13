import MyEventItem from "./MyEventItem";
import Button from "../ui/button";

function MyEventsList(props) {
    return (
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                     data-wow-delay="0.1s">
                    <Button to={'/events/create'} title={'Create'}/>
                    <h6 className="position-relative d-inline text-primary ps-4">Events</h6>
                </div>
                <div className="row g-4">
                    {props.events?.length > 0 && props.events?.map((event) => (
                        <MyEventItem
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            description={event.description}
                            location={event.location}
                            date={event.date}
                            time={event.time}
                        />
                    ))}
                    {props.events?.length === 0 && <h2 className="mt-2">No Events found</h2>}
                </div>

            </div>
        </div>
    );
}

export default MyEventsList;
