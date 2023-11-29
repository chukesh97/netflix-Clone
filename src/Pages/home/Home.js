import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';

const Home = () => {
    return (
        <div className="home">
        <Navbar />
        <Banner />
        </div>
    );
}

export default Home;