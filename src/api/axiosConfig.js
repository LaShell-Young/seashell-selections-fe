import axios from "axios";

export default axios.create({
    baseURL: 'https://selections-api.herokuapp.com/'
});