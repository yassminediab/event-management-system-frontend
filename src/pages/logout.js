import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutPage() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    const navigate = useNavigate();
    React.useEffect(() => {
        navigate('/login', { replace: true });
        window.location.reload();
    }, []);

    return (
        <section>
            <ToastContainer />
        </section>
    );
}

export default LogoutPage;
