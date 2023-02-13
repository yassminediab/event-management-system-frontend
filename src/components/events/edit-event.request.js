import { toast } from 'react-toastify';
import axios from "axios";
import {getFullUrl, getToken} from "../../constants/constants";


export async function EditEventHandler(data,setIsSuccess,eventId) {

    axios.put(getFullUrl(`events/${eventId}`), data, {headers: {Authorization: getToken()}})
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
