import { useState, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slides/authSlide";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { eyeOpenIcon, eyeCloseIcon } from "../../assets/images";
import "./_login.scss";
import ErrorMessage from "../../components/Error/ErrorMessage";
import { validator } from "./authValidation.js";

const Login = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate  = useNavigate();
    const [errorMessage, setErrorMessage] = useState({
        email: [],
        password: []
    });
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const [isPreviewPassword, setIsPreviewPassword] = useState(false);
    const authRedux = useSelector(state => state.auth);

    useEffect(() => {
        if (authRedux?.user !== null && authRedux?.user?.access_token !== "") {
            console.log('Logged in', authRedux.user);
            navigate('/');
        }
    }, [authRedux])

    const handleOnChange = useCallback(event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
        console.log(errorMessage)
        switch (name) {
            case 'email':
                setErrorMessage({
                    email: [],
                    password: errorMessage.password
                })
                console.log(errorMessage)
                break;
            case 'password':
                setErrorMessage({
                    email: errorMessage.password,
                    password: []
                })
                console.log(errorMessage)
                break;
            default:
                break;
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(validator(data))
        // const action = login(data);
        // dispatch(action);
    };

    return (
        <>
            <div className="sign-in">
                <div className="container">
                    <form className="form">
                        <div className="form__wrap form__small">
                            <h2 className="title">
                                { t('auth.login') }
                            </h2>
                            <div
                                className={ `form__wrap-item ${ errorMessage?.email?.length > 0 ? 'error' : '' }` }
                            >
                                <label htmlFor="Email">
                                    { t('auth.email') }
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder={ t('auth.email_placeholder') }
                                    onChange={ e => handleOnChange(e) }
                                />
                                <ErrorMessage message={ errorMessage?.email } />
                            </div>
                            <div
                                className={ `form__wrap-item ${ errorMessage?.password?.length > 0 ? 'error' : '' }` }
                            >
                                <label htmlFor="Password">
                                    { t('auth.password') }
                                </label>
                                <div className="inputWrap">
                                    <input
                                        type={ isPreviewPassword ? 'text' : 'password' }
                                        name="password"
                                        placeholder={ t('auth.password_placeholder') }
                                        onChange={ e => handleOnChange(e) }
                                    />
                                    <div>
                                        <i
                                            className="icon"
                                            onClick={ () => setIsPreviewPassword(! isPreviewPassword) }
                                        >
                                            <img
                                                src={ isPreviewPassword ? eyeOpenIcon : eyeCloseIcon }
                                                alt=""
                                            />
                                        </i>
                                    </div>
                                </div>
                                <ErrorMessage message={ errorMessage?.password } />
                                <ul className="note">
                                    <li>※ hint</li>
                                    <li>※ .note</li>
                                </ul>
                            </div>
                            <button
                                type="submit"
                                className="mainButton bg-green mt-0"
                                onClick={ e => handleSubmit(e) }
                            >
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