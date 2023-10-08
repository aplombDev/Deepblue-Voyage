// import { QueryClientProvider, QueryClient } from "react-query";
import { useRef } from "react";
import Home from "./components/Home/Home";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./index.css";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import SecondSection from "../src/components/SecondSection/SecondSection";
import ThirdSection from "../src/components/ThirdSection/ThirdSection";
import { Typography, createMuiTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import AquaImg from "../src/assets/images/jpg/Aqua.jpg";
import AboutUs from "./components/About Us/AboutUs";
function App() {
  const ref = useRef();
  const theme = createMuiTheme({
    typography: { fontFamily: ["Orbitron", "sans-serif"].join(",") },
  });
  return (
    // <QueryClientProvider client={QueryClient}>
    //   <h1>Hello world</h1>
    // </QueryClientProvider>
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <>
      <ThemeProvider theme={theme}>
        <div>
          <Parallax pages={4} ref={ref}>
            <ParallaxLayer offset={0} speed={1}>
              <Home />
            </ParallaxLayer>
            <ParallaxLayer offset={1.1} sticky={{ start: 0.9, end: 0.92 }}>
              <Typography
                align="center"
                justifyContent="center"
                noWrap
                variant="h2"
              >
                Lets Begin our Journey
              </Typography>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              sticky={{ start: 1, end: 1.2 }}
              style={{
                backgroundImage: `url[${AquaImg}]`,
                backgroundSize: "cover",
              }}
              speed={1}
            >
              <SecondSection />
            </ParallaxLayer>

            <ParallaxLayer offset={1.7} sticky={{ start: 1.9, end: 1.92 }}>
              <Typography
                align="center"
                justifyContent="center"
                noWrap
                variant="h2"
              >
                Live location of Phytoplankton
              </Typography>
            </ParallaxLayer>

            <ParallaxLayer sticky={{ start: 2, end: 2.2 }} offset={2} speed={1}>
              <ThirdSection />
            </ParallaxLayer>

            <ParallaxLayer offset={3.2} sticky={{ start: 3.2, end: 3.2 }}>
              <Typography
                align="center"
                justifyContent="center"
                noWrap
                variant="h2"
              >
                About Us
              </Typography>
            </ParallaxLayer>

            <ParallaxLayer offset={3.3} sticky={{ start: 3.3, end: 3.4 }}>
              <AboutUs />
            </ParallaxLayer>

            <ParallaxLayer
              offset={3.99}
              speed={2.5}
              className="button"
              sticky={{ start: 3.99, end: 3.99 }}
            >
              <ArrowCircleUpIcon
                fontSize="large"
                onClick={() => ref.current.scrollTo(0)}
              ></ArrowCircleUpIcon>
              <p>Scroll to top</p>
            </ParallaxLayer>
          </Parallax>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
