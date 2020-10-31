import config from '../../config';
import axios from 'axios';
import errorHandler from "../../errorhandler";

export async function addMovieCrud(data) {
    const FORM_DATA = new FormData();
    FORM_DATA.append('movieName',data.text);
    FORM_DATA.append('movieImage',data.media[0]);
    FORM_DATA.append('movieCategory',data.select);

    return axios.post(`${config.api_url}/movies`, FORM_DATA,{
        headers:{
            "Content-Type": "multipart/form-data",
        }
    })
        .then((json) => {
            let response = {
                success: true,
                result: json.data,
            };

            return response;

        })
        .catch((error) => {
            return errorHandler(error);
        });
}

export async function getMovieCrud(type) {
    return axios
        .get(`${config.api_url}/movies`, {
            params: {
                type: type
            }
        })
        .then(json => {
            let response = {
                success: true,
                result: json.data,
            };

            return response;
        })
        .catch(error => errorHandler(error));
}

export async function editMovieCrud(data, auth_token) {

    return axios
        .patch(`${config.api_url}/`, data, {
            headers: {
                Authorization: `Token ${auth_token}`,
            },
        })
        .then((json) => {
            let response = {
                success: true,
                result: json.data,
            };

            return response;

        })
        .catch((error) => {
            return errorHandler(error);
        });
}


export async function deleteMovieCrud(data, auth_token) {
    return axios.delete(`${config.api_url}/${data.id}/`, {
        headers: {
            Authorization: `Token ${auth_token}`,
        },
    })
        .then((result) => {
            return result;
        }).catch((error) => {
            return errorHandler(error);
        });
}
