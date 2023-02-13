import React from "react";
import {FollowCompanyHandler} from "./follow-company.request";
import {Link} from "react-router-dom";

function CompanyItem(props) {

    const [isSuccess, setIsSuccess] = React.useState(false);
    React.useEffect(() => {
    }, [isSuccess]);

    const [isFollowed, setIsFollowed] = React.useState(props.isFollowed);

    function submitHandler(event) {
        event.preventDefault();
        setIsFollowed(!isFollowed)
        FollowCompanyHandler(props.id, setIsSuccess);
    }

    return (
        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                <div class="service-icon flex-shrink-0">
                    <i class="fa fa-building fa-2x"></i>
                </div>
                <Link to={`/companies/${props?.id}/events`}><h5 class="mb-3">{props.title}</h5></Link>
                <p>Company Owner : {props.userName}</p>

                <p>Followed by : {props.numberOfFollowers}</p>
                <a class="btn px-3 mt-auto mx-auto" onClick={submitHandler}>{isFollowed ? 'Unfollow' : 'Follow'}</a>
            </div>
        </div>
    );
}
export default CompanyItem;
