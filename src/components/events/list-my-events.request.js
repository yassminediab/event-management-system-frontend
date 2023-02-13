import { toast } from 'react-toastify';
import axios from "axios";
import {getFullUrl, getToken} from "../../constants/constants";


export async function GetMyEventsHandler(setEvents) {
    axios.get(getFullUrl('events/company'), {headers: {Authorization: getToken()}})
        .then(response => {
            const {data} = response;
            setEvents(data.data);
        })
        .catch(error => {
            const data = error?.response?.data;
            toast.error(data?.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        });
}
