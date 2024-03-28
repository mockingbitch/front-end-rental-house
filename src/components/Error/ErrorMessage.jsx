import "./_errorMessage.scss";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

const ErrorMessage = (props) => {
    const { t } = useTranslation();
    let [error, setError] = useState([]);

    useEffect(() => {
        setError(props?.message);
    }, [props]);

    return (
        <>
            <ul className={`${error?.length > 0 ? '' : 'hide'} error-msg`}>
                <li>{ t(error[0]) }</li>
            </ul>
        </>
    );
}

export default ErrorMessage;