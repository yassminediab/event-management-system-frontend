import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from "../components/auth/login/login";
import {LoginHandler} from "../components/auth/login/login.request";

function LoginPage() {
    return (
        <section>
            <h1>Login</h1>
            <LoginForm login={LoginHandler} />
            <ToastContainer />
        </section>
    );
}

export default LoginPage;
