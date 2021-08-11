const ErrorPage = ({error}) => {
    return (
        <>
            {String(error) || <h3>Uh Oh - The page you were looking for doesn't exist</h3>}
            <img src={process.env.PUBLIC_URL + '/404-Error.png'} alt="404 error - page not found"/>
        </>
    )
}

export default ErrorPage;