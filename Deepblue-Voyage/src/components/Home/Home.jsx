import videoBg from "../../assets/videoBg.mp4";
import "../../index.css";
const Home = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay />
    </div>
  );
};

export default Home;
