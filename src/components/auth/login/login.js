import React, { useRef } from 'react';
import classes from './LoginForm.module.css';
import Card from '../../ui/Card';
import {useNavigate} from "react-router-dom";

function LoginForm(props) {
    const {login} = props;
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [isSuccess, setIsSuccess] = React.useState(false);
    const [user, setUser] = React.useState(false);
    React.useEffect(() => {
        if(isSuccess && !user?.company?.id) {
            navigate('/companies', { replace: true });
            window.location.reload();
        }

        if(isSuccess && user?.company?.id) {
            navigate('/companyEvents', { replace: true });
            window.location.reload();
        }

    }, [user]);
    const navigate = useNavigate();


    function submitHandler(event) {
        event.preventDefault();

        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;

        const loginData = {
            email: email,
            password: password,
        };

        login(loginData,setIsSuccess, setUser);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>

                <div className={classes.control}>
                    <label htmlFor='email'>Email</label>
                    <input type='email' required id='email' ref={emailInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor='password'>Password</label>
                    <input type='password' required id='password' ref={passwordInputRef} />
                </div>

                <div className={classes.actions}>
                    <button>Login</button>
                </div>
            </form>
        </Card>
    );
}

export default LoginForm;
