import videoBg from "../../assets/videoBg.mp4";
import "../../index.css";
import Quiz from "./Quiz";
const Home = () => {
  return (
    <>
    <div className="main">
      <video src={videoBg} autoPlay loop muted/>
    </div>
    <div>
      <h1 className="main-title">Deepblue Voyage</h1>
      <h2 className="main-subtitle">A quiz app about the ocean</h2>
      <Quiz />
    </div>
    </>
  );
};

export default Home;
