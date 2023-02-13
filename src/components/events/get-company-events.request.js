import { toast } from 'react-toastify';
import axios from "axios";
import {getFullUrl, getToken} from "../../constants/constants";


export async function GetCompanyEventsHandler(companyId,setEvent) {
    axios.get(getFullUrl(`events/companies/${companyId}`), {headers: {Authorization: getToken()}})
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
