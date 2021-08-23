
const About = () => {

    const aboutPageStyles = {
        color: 'aliceblue',
        textAlign: 'center',
        marginTop: '2rem',
        marginBottom: '2rem'
      }

    return (
        <div style={aboutPageStyles}>
            <h2>Harvesting Abundance</h2>
            <div class="form-group">
                <div class="form-control item">
                <img height={100} src="https://harvesting-abundance.s3.us-east-2.amazonaws.com/HarvestingAbundance-Logo1.svg" alt="Harvesting Abundance"></img>
                <p>This is my fifth protfolio prject which I built this app while attending Flatiron School's Fullsatck Software Engineering program. This project functions as a test-case for me to practice and demonstrate my understanding of ReactJS with Redux for the frontend and a custom Rails API for the back end. The inspiration for this project came from watching this TED talk (<a href="https://www.ted.com/talks/ron_finley_a_guerrilla_gardener_in_south_central_la?language=en">Ron Finley's A gerrilla gardener in South Central LA</a>), and also the amazing work that the <a href="https://fallingfruit.org/">Falling Fruit</a> team has done with their app.</p>
                <p>Harvesting Abundance is a celebration of the overlooked culinary bounty of our city streets. By quantifying this resource on an interactive map, the intention for this app is to facilitate intimate connections between people, food, and the natural organisms growing in our neighborhoods. Not just a free lunch! Foraging in the 21st century is an opportunity for urban exploration, to fight the scourge of stained sidewalks, and to reconnect with the botanical origins of food.</p>
                <p>The map feature is still under development and will reflect the exact location of every listed tree once development is finished. While the users contribute locations of their own, my intention is to in time comb the internet for pre-existing knowledge, seeking to unite the efforts of foragers, foresters, and freegans everywhere. Beyond the cultivated and commonplace to the exotic flavors of foreign plants and long-forgotten native plants, foraging in your neighborhood is a journey through time and across cultures.</p>
                </div>
            </div>
        </div>
    )
}

export default About