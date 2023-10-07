// import { QueryClientProvider, QueryClient } from "react-query";
import { useRef } from "react";
import Home from "./components/main/Home";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./index.css";

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

          <ParallaxLayer offset={1} speed={-2} factor={1.5} horizontal />

          <ParallaxLayer offset={3} speed={1}>
            <button onClick={() => ref.current.scrollTo(0)} className="button">
              Scroll to top
            </button>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

export default App;
