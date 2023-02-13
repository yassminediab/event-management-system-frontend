import { toast } from 'react-toastify';
import axios from "axios";
import {getFullUrl, getToken} from "../../constants/constants";


export async function DeleteEventHandler(setIsSuccess,eventId) {

    axios.delete(getFullUrl(`events/${eventId}`), {headers: {Authorization: getToken()}})
        .then(response => {
            const {data} = response;
            toast.success(data?.message, {
                position: toast.POSITION.TOP_RIGHT
            });
            setIsSuccess(true)
        })
        .catch(error => {
            const {response: {data}} = error;
            toast.error(data?.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        });
}
