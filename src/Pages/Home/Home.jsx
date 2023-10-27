import Health from "../../Components/Home-page-Layout/Health";
import Hero from "../../Components/Home-page-Layout/Hero";
import Upskills from "../../Components/Home-page-Layout/Upskills";
import Appraisal from "../../Components/Home-page-Layout/Appraisal";
import Mentorship from "../../Components/Home-page-Layout/Mentorship";
import Navbar from "../../Components/Generic-Layout/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Appraisal />
            <Upskills />
            <Mentorship />
            <Health />



        </div>
    )
}

export default Home;
