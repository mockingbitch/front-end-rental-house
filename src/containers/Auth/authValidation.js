export const validator = (data) => {
    let validation = 'validation.login';
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let error = {
        email: [],
        password: [],
    };
    // let email = data.email;
    // let password = data.password;
    let { email, password } = data;
    if (email.length === 0) {
        error.email.push(`${ validation }.email.required`);
    }
    if (email.length > 50) {
        error.email.push(`${ validation }.email.max_length`);
    }
    if (!String(email).toLowerCase().match(regex)) {
        error.email.push(`${ validation }.email.email_regex`);
    }
    if (password.length === 0) {
        error.password.push(`${ validation }.password.required`);
    }
    if (password.length < 6) {
        error.password.push(`${ validation }.password.min_length`);
    }
    if (password.length > 20) {
        error.password.push(`${ validation }.password.max_length`);
    }
    console.log(error)
    return error;
}