import config from '../../config';
import axios from 'axios';
import errorHandler from "../../errorhandler";

export async function getCategoriesCrud() {
    return axios
        .get(`${config.api_url}/categories`)
        .then(json => {
            let response = {
                success: true,
                result: json.data,
            };

            return response;
        })
        .catch(error => errorHandler(error));
}

