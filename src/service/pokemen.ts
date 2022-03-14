import axios from 'axios';

export const getPokemen = async (id: number) => {
    const response = await axios.get(`${process.env.REACT_APP_POKE_API}/${id}`);
    if (!response.data) {
        throw new Error('Error while fetching data, please try again');
    }

    return response.data;
};
