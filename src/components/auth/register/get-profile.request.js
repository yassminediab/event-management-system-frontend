import {getFullUrl, getToken} from "../../../constants/constants";
import { toast } from 'react-toastify';
import axios from "axios";


export async function GetProfileHandler(setUser) {
    axios.get(getFullUrl('users/profile'),{headers: {Authorization: getToken()}})
        .then(response => {
            const {data} = response;
            setUser(data.data);
        })
        .catch(error => {
            const {response: {data}} = error;
            toast.error(data?.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        });
}
