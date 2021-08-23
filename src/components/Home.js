import MapContainer from '../containers/MapContainer'

const Home = () => {

    const homePageStyles = {
        color: 'aliceblue',
        textAlign: 'center',
        marginTop: '2rem',
        marginBottom: '2rem'
      }
    
    
    return (
        <div style={homePageStyles}>
            <h2>Welcome to Harvesting Abundance</h2>
            <div class="form-group">
                <div class="form-control item">
                    <p> Harvesting Abundance is a celebration of the overlooked culinary bounty of our city streets. By quantifying this resource on an interactive map, the intention for this app is to facilitate intimate connections between people, food, and the natural organisms growing in our neighborhoods.
                        Not just a free lunch! Foraging in the 21st century is an opportunity for urban exploration, to fight the scourge of stained sidewalks, and to reconnect with the botanical origins of food.</p>
                </div><br/>
                <div>
                 <MapContainer />
                </div>
            </div>
        </div>    
    )
}

export default Home