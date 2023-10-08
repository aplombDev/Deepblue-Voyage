import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
// import NASA1 from "../../assets/images/jpg/nasa1.jpg";
import EarthBg from "../../assets/images/gif/EarthBg.gif";
// import AquaImg from "../../assets/images/jpg/Aqua.jpg";
import LeftSection from "../SecondSection/Sections/LeftSection/LeftSection";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#02BFE7",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SecondSection() {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{
        // backgroundImage: `url(${AquaImg})`,
        backgroundColor: "#02BFE7",
      }}
    >
      <Grid container spacing={2} columns={16}>
        <Grid xs={8}>
          <Item>
            <LeftSection />
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item
            style={{
              padding: "0px",
              margin: "0px",
              border: "opx",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
              width: "100%",
            }}
          >
            <img src={EarthBg} alt="EarthBg" />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
