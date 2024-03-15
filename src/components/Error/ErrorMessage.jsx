import "./_errorMessage.scss";

const ErrorMessage = (props) => {
    return (
        <>
            <ul class={`${props.display ? '' : 'hide'} error-msg`}>
                <li>{ props.message }</li>
            </ul>
        </>
    );
}

export default ErrorMessage;