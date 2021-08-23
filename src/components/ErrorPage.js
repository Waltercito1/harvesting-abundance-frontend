import Container from 'react-bootstrap/Container'

const ErrorPage = ({error}) => {
    return (
        <Container fluid >
            {String(error) || <h3>Uh Oh - The page you were looking for doesn't exist</h3>}
            <div >
                <img className='error-page-image' src={process.env.PUBLIC_URL + '/404-Error.png'} alt="404 error - page not found"/>
            </div>
        </Container>
    )
}

export default ErrorPage;