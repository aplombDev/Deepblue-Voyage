// import { QueryClientProvider, QueryClient } from "react-query";
import { useRef } from "react";
import Home from "./components/Home/Home";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./index.css";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import SecondSection from "../src/components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
function App() {
  const ref = useRef();
  return (
    // <QueryClientProvider client={QueryClient}>
    //   <h1>Hello world</h1>
    // </QueryClientProvider>
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <>
      <div>
        <Parallax pages={5} ref={ref}>
          <ParallaxLayer speed={2.5}>
            <Home />
          </ParallaxLayer>
          <ParallaxLayer offset={1}>
            <SecondSection />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1}>
            <ThirdSection />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={1} className="button">
            <ArrowCircleUpIcon
              fontSize="large"
              onClick={() => ref.current.scrollTo(0)}
            ></ArrowCircleUpIcon>
            <p>Scroll to top</p>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

export default App;
