import React, { useRef } from 'react';
import classes from './RegisterForm.module.css';
import Card from '../../ui/Card';
import {useNavigate} from "react-router-dom";

function EditCompanyProfileForm(props) {
    const {hook, user} = props;
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const titleInputRef = useRef();

    const [isSuccess, setIsSuccess] = React.useState(false);
    React.useEffect(() => {
        if(isSuccess) {
            navigate('/companyEvents', { replace: true });
        }
    }, [isSuccess]);
    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();

        const name = nameInputRef.current.value;
        const email = emailInputRef.current.value;
        const title = titleInputRef.current.value;

        const registerData = {
            name: name,
            email: email,
            title: title,
        };

        hook(registerData, setIsSuccess);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='name'>Name</label>
                    <input defaultValue={user?.name} type='text' required id='name' ref={nameInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor='email'>Email</label>
                    <input type='email' defaultValue={user?.email} required id='email' ref={emailInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='name'>Company Title</label>
                    <input defaultValue={user?.company?.title} type='text' required id='name' ref={titleInputRef} />
                </div>

                <div className={classes.actions}>
                    <button>Edit Profile</button>
                </div>
            </form>
        </Card>
    );
}

export default EditCompanyProfileForm;
