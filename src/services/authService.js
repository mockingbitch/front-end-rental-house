import axios from "axios";

let API_URL = import.meta.env.VITE_API_DOMAIN;

const LoginService = async ({email, password}) => {
    return await axios
        .post(API_URL + "login", {
            email,
            password
        })
        .catch(error => {
            if (error.response){
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser 
                // and an instance of http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
        })
}

const LogoutService = (token) => {
    return axios.get(API_URL + "logout", { headers: {"Authorization" : `Bearer ${token}`} }).then(response => response.data)
}

export {
    LoginService,
    LogoutService,
}