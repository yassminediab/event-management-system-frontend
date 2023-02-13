import React, { useRef } from 'react';
import classes from './CreateEvent.module.css';
import Card from '../ui/Card';
import {useNavigate} from "react-router-dom";

function EventFeedbackForm(props) {
    const {hook} = props;
    const feedbackInputRef = useRef();

    const [isSuccess, setIsSuccess] = React.useState(false);
    React.useEffect(() => {
        if(isSuccess) {
            navigate('/userEvents', { replace: true });
        }
    }, [isSuccess]);
    const navigate = useNavigate();

    function submitHandler(clickEvent) {
        clickEvent.preventDefault();

        const feedback = feedbackInputRef.current.value;

        const data = {
            feedback: feedback,
        };

        hook(data, setIsSuccess, props?.id);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>

                <div className={classes.control}>
                    <label htmlFor='date'>Feedback</label>
                    <textarea required id='name' ref={feedbackInputRef} />
                </div>

                <div className={classes.actions}>
                    <button>Add Feedback</button>
                </div>
            </form>
        </Card>
    );
}

export default EventFeedbackForm;
