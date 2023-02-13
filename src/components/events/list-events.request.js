import { toast } from 'react-toastify';
import axios from "axios";
import {getFullUrl, getToken} from "../../constants/constants";


export async function GetEventsHandler(setEvents, filters) {
    axios.get(getFullUrl('events'),{headers: {Authorization: getToken()} , params: filters})
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
