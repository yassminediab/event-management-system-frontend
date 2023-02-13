import {getFullUrl} from "../../../constants/constants";
import { toast } from 'react-toastify';
import axios from "axios";
import React from "react";


export async function LoginHandler(data, setIsSuccess, setUser) {
    axios.post(getFullUrl('auth/login'), data)
        .then(response => {
            const {data} = response;
            localStorage.setItem('token', data?.data?.token);
            localStorage.setItem('user', JSON.stringify(data?.data));
            setIsSuccess(true);
            setUser(data?.data);
        })
        .catch(error => {
            const {response: {data}} = error;
            toast.error(data?.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        });
}
