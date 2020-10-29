import '../styles/home.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="container">
      <img
        className="page-image bg"
        src="https://wallpapercave.com/wp/9Wxb10G.jpg"
        alt="bg"
        ></img>
      <div className="content">
        <div className="text">Get all the latests fashion trends here!</div>
        <Link className="button" to="/products">
          START SHOPPING
        </Link>
      </div>
    </div>
  );
}
export default Home;
