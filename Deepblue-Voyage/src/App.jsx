// import { QueryClientProvider, QueryClient } from "react-query";
import { useRef } from "react";
import Home from "./components/main/Home";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./index.css";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import SecondSection from "./components/secondSection/secondSection";


function App() {
  const ref = useRef();
  return (
    // <QueryClientProvider client={QueryClient}>
    //   <h1>Hello world</h1>
    // </QueryClientProvider>
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <>
      <div>
        <Parallax pages={4} ref={ref}>
          <ParallaxLayer offset={0} speed={1}>
            <Home />
          </ParallaxLayer>

          <ParallaxLayer offset={2} >
            <SecondSection />
          </ParallaxLayer>

          <ParallaxLayer offset={3.45} speed={1} className="button">
            <ArrowCircleUpIcon
              fontSize="large"
              onClick={() => ref.current.scrollTo(0)}
            ></ArrowCircleUpIcon>
            <p>Scroll to top</p>
          </ParallaxLayer>
        </Parallax>
      </div>
      <div>
        <SecondSection />
      </div>
    </>
  );
}

export default App;
