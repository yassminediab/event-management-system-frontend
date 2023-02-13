
import React from "react";
import {ToastContainer} from "react-toastify";
import EditProfileForm from "../components/auth/register/profile";
import {EditProfileHandler} from "../components/auth/register/profile.request";
import {GetProfileHandler} from "../components/auth/register/get-profile.request";
import {EditCompanyProfileHandler} from "../components/auth/register/company-profile.request";
import EditCompanyProfileForm from "../components/auth/register/company-profile";
import {useNavigate} from "react-router-dom";

function CompanyProfile() {

    const profileHandler = EditCompanyProfileHandler;
    const getProfileHandler = GetProfileHandler;
    const [user, setUser] = React.useState(null);
    React.useEffect(() => {
        getProfileHandler(setUser);
    }, []);

    const navigate = useNavigate();
    React.useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user) {
            navigate('/login', {replace: true});
            window.location.reload();
        }
        if(!user?.company?.id) {
            navigate('/companies', {replace: true});
            window.location.reload();
        }
    }, []);

    return (
        <section>
            <h1>Edit Company Profile</h1>
            <EditCompanyProfileForm user={user} hook={profileHandler} />
            <ToastContainer />
        </section>
    );
}

export default CompanyProfile;
