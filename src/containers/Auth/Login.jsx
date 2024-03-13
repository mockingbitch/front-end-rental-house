import React, {useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slides/authSlide';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Login = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate  = useNavigate();
    const [message, setMessage] = useState('');
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const authRedux = useSelector(state => state.auth);

    useEffect(() => {
        if (authRedux.user !== null && authRedux.user.access_token !== "") {
            console.log('Logged in', authRedux.user);
            navigate('/');
        }
    }, [authRedux])

    const handleOnChange = useCallback(event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    });

    const handleSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            const action = login(data);
            dispatch(action);
            setIsLoading(false);
        }, 2000)
    }
    
    return (
        <>
            <input
              placeholder={ t('auth.email') }
              type="email"
              name="email"
              autoComplete="new-email"
              onChange={ (e) => handleOnChange(e) }
            />
            <input
              placeholder={t('auth.password')}
              type="password"
              name="password"
              autoComplete="new-password"
              onChange={ (e) => handleOnChange(e) }
            />
            <button
              className="my-4"
              color="primary"
              type="button"
              onClick={handleSubmit}
            >
                { t('auth.login') }
            </button>
        </>
    );
};

export default Login;