import React, { useRef } from 'react';
import classes from './CreateEvent.module.css';
import Card from '../ui/Card';
import {useNavigate} from "react-router-dom";

function CreateEventForm(props) {
    const {hook} = props;
    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    const dateInputRef = useRef();
    const locationInputRef = useRef();

    const [isSuccess, setIsSuccess] = React.useState(false);
    React.useEffect(() => {
        if(isSuccess) {
            navigate('/companyEvents', { replace: true });
        }
    }, [isSuccess]);
    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();

        const title = titleInputRef.current.value;
        const description = descriptionInputRef.current.value;
        const date = dateInputRef.current.value;
        const location = locationInputRef.current.value;

        const data = {
            title: title,
            description: description,
            date: date,
            location: location,
        };

        hook(data, setIsSuccess);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Title</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor='location'>Location</label>
                    <input type='text' required id='location' ref={locationInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor='date'>Date</label>
                    <input type='datetime-local' required id='date' ref={dateInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea required id='name' ref={descriptionInputRef} />
                </div>

                <div className={classes.actions}>
                    <button>Create</button>
                </div>
            </form>
        </Card>
    );
}

export default CreateEventForm;
