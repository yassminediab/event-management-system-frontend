import React, { useRef } from 'react';
import classes from './CreateEvent.module.css';
import Card from '../ui/Card';
import {useNavigate} from "react-router-dom";

function EditEventForm(props) {
    const {hook, event} = props;
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

    function submitHandler(clickEvent) {
        clickEvent.preventDefault();

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

        hook(data, setIsSuccess, event?.id);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Title</label>
                    <input defaultValue={event?.title} type='text' required id='name' ref={titleInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor='location'>Location</label>
                    <input defaultValue={event?.location} type='text' required id='name' ref={locationInputRef} />
                </div>

                {event?.date &&
                <div className={classes.control}>
                    <label htmlFor='date'>Date</label>
                    <input defaultValue={new Date(event?.date || '').toISOString().substring(0, 16)} type='datetime-local'
                           required id='name' ref={dateInputRef}/>
                </div>
                }

                <div className={classes.control}>
                    <label htmlFor='date'>Description</label>
                    <textarea defaultValue={event?.description} required id='name' ref={descriptionInputRef} />
                </div>

                <div className={classes.actions}>
                    <button>Edit</button>
                </div>
            </form>
        </Card>
    );
}

export default EditEventForm;
