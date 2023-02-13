import { toast } from 'react-toastify';
import axios from "axios";
import {getFullUrl, getToken} from "../../constants/constants";


export async function GetEventAttendanceHandler(eventId,setEvent) {
    axios.get(getFullUrl(`events/${eventId}/attendance`), {headers: {Authorization: getToken()}})
        .then(response => {
            const {data} = response;
            setEvent(data.data);
        })
        .catch(error => {
            const data = error?.response?.data;
            toast.error(data?.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        });
}
