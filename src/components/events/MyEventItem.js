import {Link} from "react-router-dom";
function MyEventItem(props) {
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
                <Link to={`/events/${props?.id}/edit`} class="btn px-3 mt-auto mx-auto" >Edit</Link>
                <br/>
                <Link to={`/events/${props?.id}/delete`} class="btn px-3 mt-auto mx-auto" >Delete</Link>
                <br/>
                <Link to={`/events/${props?.id}/rsvp`} class="btn px-3 mt-auto mx-auto" >Rsvp, Attendance and Feedback</Link>
            </div>
        </div>
    );
}
export default MyEventItem;


