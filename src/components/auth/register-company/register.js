import React, { useRef } from 'react';
import classes from './RegisterForm.module.css';
import Card from '../../ui/Card';
import {useNavigate} from "react-router-dom";

function RegisterCompanyForm(props) {
    const {registerUser} = props;
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const titleInputRef = useRef();
    const passwordInputRef = useRef();

    const [isSuccess, setIsSuccess] = React.useState(false);
    React.useEffect(() => {
        if(isSuccess) {
            navigate('/login', { replace: true });
        }
    }, [isSuccess]);
    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();

        const name = nameInputRef.current.value;
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        const title = titleInputRef.current.value;

        const registerData = {
            name: name,
            email: email,
            password: password,
            companyTitle: title,
        };

        registerUser(registerData,setIsSuccess);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' required id='name' ref={nameInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor='title'>Company Title</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor='email'>Email</label>
                    <input type='email' required id='email' ref={emailInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor='password'>Password</label>
                    <input type='password' required id='password' ref={passwordInputRef} />
                </div>

                <div className={classes.actions}>
                    <button>Register</button>
                </div>
            </form>
        </Card>
    );
}

export default RegisterCompanyForm;
