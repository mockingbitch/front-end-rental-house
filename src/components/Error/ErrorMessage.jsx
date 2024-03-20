import "./_errorMessage.scss";

const ErrorMessage = (props) => {
    return (
        <>
            <ul className={`${props.display ? '' : 'hide'} error-msg`}>
                <li>{ props.message }</li>
            </ul>
        </>
    );
}

export default ErrorMessage;