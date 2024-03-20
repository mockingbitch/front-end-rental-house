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
    const [isPreviewPassword, setIsPreviewPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const authRedux = useSelector(state => state.auth);

    useEffect(() => {
        if (authRedux?.user !== null && authRedux?.user?.access_token !== "") {
            console.log('Logged in', authRedux.user);
            navigate('/');
        }
        console.log(authRedux);
        setTimeout(() => setIsLoading(false), 3300);
    }, [authRedux])

    const handleOnChange = useCallback(event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const action = login(data);
        dispatch(action);
    };

    const handleTogglePreviewPassword = () => {
        setIsPreviewPassword(! isPreviewPassword);
    };
    
    return (
        <>
            <div className="sign-in">
                <div className="container">
                    <form className="form">
                        <div className="form__wrap form__small">
                            <h2 className="title">{ t('auth.login') }</h2>
                            <div className={ `form__wrap-item ${ message?.email ? 'error' : '' }` }>
                                <label htmlFor="Email">{ t('auth.email') }</label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder={ t('auth.email_placeholder') }
                                    onClick={e => handleOnChange(e) }
                                />
                                <ErrorMessage message={ message?.email } />
                            </div>
                            <div className="form__wrap-item">
                                <label htmlFor="Password">{ t('auth.password') }</label>
                                <div className="inputWrap">
                                    <input
                                        type={ isPreviewPassword ? 'text' : 'password' }
                                        name="password"
                                        placeholder={ t('auth.password_placeholder') }
                                        onClick={e => handleOnChange(e) }
                                    />
                                    <div>
                                        <i className="icon" onClick={ handleTogglePreviewPassword }>
                                            <img src={ isPreviewPassword ? eyeOpenIcon : eyeCloseIcon } alt="" />
                                        </i>
                                    </div>
                                </div>
                                <ul className="note">
                                    <li>※ hint</li>
                                    <li>※ .note</li>
                                </ul>
                            </div>
                            <button type="submit" className="mainButton bg-green mt-0" onClick={ e => handleSubmit(e) }>
                                <p>{ t('common.button.login') }</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;