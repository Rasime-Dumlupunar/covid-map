import axios from "axios";

const api = axios.create({
    baseURL: 'https://covid-19-statistics.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': 'c548d77868mshcee01d17b8c8bbep150604jsn769a0b8cdc94',
        'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
      },
});

export default api;