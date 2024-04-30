import axios from 'axios';

export const getCharaterList = async () => {
    try {
        const response = await axios.get('https://api.potterdb.com/v1/characters?filter[name_cont]=Weasley');
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}