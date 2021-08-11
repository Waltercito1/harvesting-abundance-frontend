import Loader from 'react-loader-spinner'

const LoadingSpinner = (props) => {

    return (
        <div
            style={{
                width: "100%",
                height: "100",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <h4>Loading</h4>
            <Loader type="Rings" color="#bfff00" height={100} width={100} />
        </div>
    );  
}

export default LoadingSpinner
