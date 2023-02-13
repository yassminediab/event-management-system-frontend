import {getFullUrl, getToken} from "../../../constants/constants";
import { toast } from 'react-toastify';
import axios from "axios";


export async function EditProfileHandler(registerData,setIsSuccess) {
    axios.put(getFullUrl('users/profile'), registerData,{headers: {Authorization: getToken()}})
        .then(response => {
            const {data} = response;
            toast.success(data?.message, {
                position: toast.POSITION.TOP_RIGHT
            });
            setIsSuccess(true);
        })
        .catch(error => {
            const {response: {data}} = error;
            toast.error(data?.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        });
}
