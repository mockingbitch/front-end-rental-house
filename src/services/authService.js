import axios from "axios";

let API_URL = import.meta.env.VITE_API_DOMAIN;

const LoginService = async ({email, password}) => {
    return await axios
        .post(API_URL + "login", {
            email,
            password
        })
        .then(response => {
            // if (response.data.access_token) {
            // localStorage.setItem("token", JSON.stringify(response.data.access_token));
            // localStorage.setItem("user", JSON.stringify(response.data.user.name));
            // }

            return response.data;
        });
}

const LogoutService = (token) => {
    return axios.get(API_URL + "logout", { headers: {"Authorization" : `Bearer ${token}`} }).then(response => response.data)
}

export {
    LoginService,
    LogoutService,
}