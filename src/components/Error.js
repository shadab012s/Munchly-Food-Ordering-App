import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err); // Inspect the error object structure

    // // Safely access status and statusText, with fallback values
    const status = err?.status || "Unknown Error";
    const statusText = err?.statusText || "Something went wrong";

    return (
        <div>
            <h1>It's an error ss</h1>
            <h2>{status}</h2>
            <h3>{statusText}</h3>
        </div>
    );
};

export default Error;
