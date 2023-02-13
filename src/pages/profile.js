
import React from "react";
import {ToastContainer} from "react-toastify";
import EditProfileForm from "../components/auth/register/profile";
import {EditProfileHandler} from "../components/auth/register/profile.request";
import {GetProfileHandler} from "../components/auth/register/get-profile.request";
import {useNavigate} from "react-router-dom";

function Profile() {

    const profileHandler = EditProfileHandler;
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
        if(user?.company?.id) {
            navigate('/companyEvents', {replace: true});
            window.location.reload();
        }
    }, []);

    return (
        <section>
            <h1>Edit Profile</h1>
            <EditProfileForm user={user} hook={profileHandler} />
            <ToastContainer />
        </section>
    );
}

export default Profile;
