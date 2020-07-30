import axios from 'axios';

const KEY = 'AIzaSyBOGd6VjAG5G4W-SYpBhm6LAF11P8epmNQ';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

});