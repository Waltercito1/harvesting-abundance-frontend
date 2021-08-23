import Container from 'react-bootstrap/Container'

const ErrorPage = () => {
    return (
        <Container fluid >
            <div >
                <img className='error-page-image' src={process.env.PUBLIC_URL + '/404-Error.png'} alt="404 error - page not found"/>
            </div>
        </Container>
    )
}

export default ErrorPage;