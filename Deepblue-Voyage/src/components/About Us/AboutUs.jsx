import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./aboutus.css";
import A from '../../assets/images/jpg/a.jpg'
import G from '../../assets/images/jpg/g.jpg'
import N from '../../assets/images/jpg/n.jpg'
import SA from '../../assets/images/jpg/sa.jpg'
import U from '../../assets/images/jpg/u.jpg'
import S from '../../assets/images/jpg/a.jpg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  alignItems: "center",
}));

const teamMembers = [
  {
    name: "Aayush Joshi",
    photo: A,
    linkedIn: "https://www.linkedin.com/in/aayush-joshi-🚀-ba9570199/",
  },
  {
    name: "Gajananda M. Adhikari",
    photo: G,
    linkedIn: "https://www.linkedin.com/in/gazananda/",
  },
  {
    name: "Nischal Khanal",
    photo: N,
    linkedIn: "https://www.linkedin.com/in/nischalkhanal/",
  },
  {
    name: "Sanskriti Malla",
    photo: SA,
    linkedIn: "https://www.linkedin.com/in/sanskriti-malla-23519724b/",
  },
  {
    name: "Srijan Lamichanne",
    photo: S,
    linkedIn: "https://www.linkedin.com/in/srijanlamichanne/",
  },
  {
    name: "Ujjwal Dhakal",
    photo: U,
    linkedIn: "https://www.linkedin.com/in/ujjwalnp/",
  },
];

export default function AboutUs() {
  return (
    <div className="Item">
      <div className="about-us-container">
        <h1>About Us: Marine Life Project</h1>
        <p>
          Welcome to our Marine Life Project, where we explore the fascinating
          world beneath the waves. Our project aims to showcase the beauty and
          diversity of marine life around the globe.
        </p>
        <p>
          We use interactive visualizations like a 3D globe and detailed maps to
          provide you with an immersive experience. Explore the depths of the
          ocean, learn about different marine species, and understand the
          importance of marine conservation.
        </p>

        <Box sx={{ width: 1 }}>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            gap={1}
          >
            {teamMembers.map((member, index) => (
              <Box key={index}>
                <Item>
                  <div>
                    <img
                      src={member.photo}
                      alt={member.name}
                      style={{ width: "100%", borderRadius: "50%" }}
                    />
                  </div>
                  <div>
                    <h3>{member.name}</h3>
                  </div> <br></br>
                  <div>
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </Item>
              </Box>
            ))}
          </Box>
          <Box display="flex" justifyContent="center" mt={4}>
            <div>@copyright Gardener of the galaxy 2023</div>
          </Box>
        </Box>
      </div>
    </div>
  );
}
