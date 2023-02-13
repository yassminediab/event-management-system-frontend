import React, { useRef } from 'react';
import classes from './RegisterForm.module.css';
import Card from '../../ui/Card';
import {useNavigate} from "react-router-dom";

function RegisterForm(props) {
    const {registerUser} = props;
    const nameInputRef = useRef();
    const emailInputRef = useRef();
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

        const registerData = {
            name: name,
            email: email,
            password: password,
        };

        registerUser(registerData, setIsSuccess);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' required id='name' ref={nameInputRef} />
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

export default RegisterForm;
