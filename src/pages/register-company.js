import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterCompanyForm from "../components/auth/register-company/register";
import {RegisterCompanyHandler} from "../components/auth/register-company/register.request";

function RegisterCompanyPage() {
    return (
        <section>
            <h1>Register</h1>
            <RegisterCompanyForm registerUser={RegisterCompanyHandler} />
            <ToastContainer />
        </section>
    );
}

export default RegisterCompanyPage;
