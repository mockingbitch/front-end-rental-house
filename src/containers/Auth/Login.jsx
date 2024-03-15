import React, {useState, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slides/authSlide";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { eyeOpenIcon, eyeCloseIcon } from "../../assets/images";
import "./_login.scss";
import ErrorMessage from "../../components/Error/ErrorMessage";

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
        setTimeout(() => setIsLoading(false), 3300);
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
            <div className="sign-in">
                <div className="container">
                    <form className="form">
                        <div className="form__wrap form__small">
                            <h2 className="title">{ t('auth.login') }</h2>
                            <div className="form__wrap-item error">
                                <label htmlFor="Email">{ t('auth.email') }</label>
                                <input type="text" name="email" placeholder={ t('auth.email_placeholder') } />
                                <ErrorMessage message="test" display={false} />
                            </div>
                            <div className="form__wrap-item">
                                <label htmlFor="Password">{ t('auth.password') }</label>
                                <div className="inputWrap">
                                    <input type="password" name="password" placeholder={ t('auth.password_placeholder') } />
                                    <div>
                                        <i className="icon hide">
                                            <img src={ eyeOpenIcon } alt="" />
                                        </i>
                                        <i className="icon">
                                            <img src={ eyeCloseIcon } alt="" />
                                        </i>
                                    </div>
                                </div>
                                <ul className="note">
                                    <li>※ hint</li>
                                    <li>※ .note</li>
                                </ul>
                            </div>
                            <button type="submit" className="mainButton bg-green mt-0">
                                <p>button</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;