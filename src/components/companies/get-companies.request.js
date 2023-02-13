import { toast } from 'react-toastify';
import axios from "axios";
import {getFullUrl, getToken} from "../../constants/constants";


export async function GetCompanyHandler(setCompanies) {
    axios.get(getFullUrl('companies'), {headers: {Authorization: getToken()}})
        .then(response => {
            const {data} = response;
            setCompanies(data.data);
        })
        .catch(error => {
            const {response: {data}} = error;
            toast.error(data?.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        });
}
