
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
                <p>Harvesting Abundance is a celebration of the overlooked culinary bounty of our city streets. By quantifying this resource on an interactive map, we hope to facilitate intimate connections between people, food, and the natural organisms growing in our neighborhoods. Not just a free lunch! Foraging in the 21st century is an opportunity for urban exploration, to fight the scourge of stained sidewalks, and to reconnect with the botanical origins of food.</p>
                <p>Our edible map is not the first of its kind, but it aspires to be the world's most comprehensive. While our users contribute locations of their own, we comb the internet for pre-existing knowledge, seeking to unite the efforts of foragers, foresters, and freegans everywhere. The imported datasets range from small neighborhood foraging maps to vast professionally-compiled tree inventories. This so far amounts to 2,841 different types of edibles (most, but not all, plant species) distributed over 1,448,979 locations. Beyond the cultivated and commonplace to the exotic flavors of foreign plants and long-forgotten native plants, foraging in your neighborhood is a journey through time and across cultures.</p>
                <p>Join us in celebrating hyper-local food! The map is open for anyone to edit, the database can be downloaded with just one click, and the code is open-source. You are likewise encouraged to share the bounty with your fellow humans. Our sharing page lists hundreds of local organizations - planting public orchards and food forests, picking otherwise-wasted fruits and vegetables from city trees and farmers' fields, and sharing with neighbors and the needy.</p>
                </div>
            </div>
        </div>
    )
}

export default About