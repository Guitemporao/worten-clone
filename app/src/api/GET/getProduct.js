import axios from 'axios';
import { apiUrl } from '../../utils/config';

export const getProduct = async (id) => {
    try {
        const res = await axios({
            url: `http://localhost:5000/api/products/${id}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (res.statusText !== 'OK') {
            throw new Error(res.data.message);
        }

        const { data } = res
        console.log(data);
        return data

    } catch (err) {
        return { error: err.response.data.message || err.message }
    }

}