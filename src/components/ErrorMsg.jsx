import { useRouteError } from "react-router-dom";

const ErrorMsg = () => {

    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Oops !!! We wil be back soon...</h1>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    )
}
export default ErrorMsg;