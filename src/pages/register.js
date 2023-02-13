import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {RegisterHandler} from "../components/auth/register/register.request";
import RegisterForm from "../components/auth/register/register";

function RegisterPage() {
    return (
        <section>
            <h1>Register</h1>
            <RegisterForm registerUser={RegisterHandler} />
            <ToastContainer />
        </section>
    );
}

export default RegisterPage;
