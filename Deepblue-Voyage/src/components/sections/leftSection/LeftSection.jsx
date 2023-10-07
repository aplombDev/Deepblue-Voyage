import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Color } from 'cesium';

function QuizShow({question,options,correct_option}) {
    const questionTitle = {
        color: "black",
        paddingTop: "10px",
        paddingBottom: "30px",
        borderRadius: "5px",
      };

      const card = {

    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginTop: "5px",
    backgroundColor: "#02BFE7",
      }
    return (
      <>
        <div className="" style={card}>

    <h1 className='' style={questionTitle}>{question}</h1>        
    <div className='pt-30 mt-30 text-white' >
    <div>
    <Button variant="contained" style={{backgroundColor: "#02BFE7", color: "white", width: "100%", marginBottom: "10px"}}>{options[0]}</Button>
    <Button variant="contained" style={{backgroundColor: "#02BFE7", color: "white", width: "100%", marginBottom: "10px"}}>{options[1]}</Button>
    <Button variant="contained" style={{backgroundColor: "#02BFE7", color: "white", width: "100%", marginBottom: "10px"}}>{options[2]}</Button>
    <Button variant="contained" style={{backgroundColor: "#02BFE7", color: "white", width: "100%", marginBottom: "10px"}}>{options[3]}</Button>
    <Button variant="contained" style={{backgroundColor: "#02BFE7", color: "white", width: "100%", marginBottom: "10px",alignItems: "flex-end",display:"flex",flexDirection:"column"}}><Button style={{backgroundColor: "green", color: "white"}}>Next</Button></Button>
    
    <div className="text-left">
    
    </div>
    </div>
    </div>
       
        </div>
      </>
    );
  }
  
  function QuizPostShow() {
   const QuizData =  [
    {
      question: "What do we call the big, wet place where lots of fish and sea creatures live?",
      options: ["Lake", "Ocean", "Bathtub", "Puddle"],
      correct_option: "Ocean"
    },
    {
      question: "Which ocean is the biggest one in the world?",
      options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Kiddie Pool"],
      correct_option: "Pacific Ocean"
    },
    {
      question: "Which animal is known for having eight long arms and living in the ocean?",
      options: ["Octopus", "Teddy Bear", "Lion", "Penguin"],
      correct_option: "Octopus"
    },
    {
      question: "What is the name of the tiny sea creatures that glow in the dark and make the ocean look magical at night?",
      options: ["Fireflies", "Jellyfish", "Magic Beans", "Shooting Stars"],
      correct_option: "Jellyfish"
    },
    {
      question: "Who is the king of the ocean and has a big fin on his back?",
      options: ["Santa Claus", "Dolphin", "Blue Whale", "Mermaid"],
      correct_option: "Blue Whale"
    },
    {
      question: "What do sea turtles use to swim through the water?",
      options: ["Flippers", "Sneakers", "Rollerblades", "Umbrellas"],
      correct_option: "Flippers"
    },
    {
      question: "Which colorful fish is famous for its beautiful scales and is friends with a forgetful clownfish named Nemo?",
      options: ["Goldfish", "Clownfish", "Rainbow Fish", "Catfish"],
      correct_option: "Clownfish"
    },
    {
      question: "What do whales like to do when they come to the surface of the ocean and blow water into the air?",
      options: ["Play soccer", "Sing songs", "Breathe", "Take selfies"],
      correct_option: "Breathe"
    },
    {
      question: "What's the name of the sandy area where the ocean meets the land, and you can build sandcastles?",
      options: ["Beach", "Desert", "Ice Cream Shop", "Playground"],
      correct_option: "Beach"
    },
    {
      question: "What do you call a big, bumpy, and colorful structure under the ocean where fish like to hide and play?",
      options: ["Sandcastle", "Coral reef", "Spaceship", "Treehouse"],
      correct_option: "Coral reef"
    },
    {
      question: "Which animal has a long, sticky tongue and loves to eat ants in the ocean?",
      options: ["Penguin", "Kangaroo", "Seahorse", "Anteater"],
      correct_option: "AnteaterSeahorse"
    },
    {
      question: "What's the name of the pirate's treasure that's sometimes found buried in the sand under the ocean?",
      options: ["Gold coins", "Seashells", "Buried Pizza", "Chocolate bars"],
      correct_option: "Gold coins"
    },
    {
      question: "Which sea creature has a hard shell and likes to pinch things with its claws?",
      options: ["Lobster", "Teddy Bear", "Feather Duster", "Teddy Lobster"],
      correct_option: "Lobster"
    },
    {
      question: "What's the name of the place where you can watch fish, sharks, and sea turtles swim around without getting wet?",
      options: ["Ice rink", "Movie theater", "Aquarium", "Library"],
      correct_option: "Aquarium"
    },
    {
      question: "How do fish breathe underwater?",
      options: ["With a snorkel", "By holding their breath", "With gills", "With scuba gear"],
      correct_option: "With gills"
    },
    {
      question: "What's the name of the game where you slide down the waves on a board?",
      options: ["Surfing", "Sledding", "Sleeping", "Painting"],
      correct_option: "Surfing"
    },
    {
      question: "Which animal has a long, wiggly body and no legs, and it sometimes squirts ink to hide from predators?",
      options: ["Snake", "Worm", "Squid", "Caterpillar"],
      correct_option: "Squid"
    },
    {
      question: "What's the name of the big, round thing in the sky that helps make the ocean waves?",
      options: ["Sun", "Moon", "Pizza", "Balloon"],
      correct_option: "Moon"
    },
    {
      question: "Which ocean animal has a big, soft body and likes to squirt water at people when they get too close?",
      options: ["Dolphin", "Jellyfish", "Watergun", "Watermelon"],
      correct_option: "Jellyfish"
    },
    {
      question: "What do you call the sound the ocean makes when the waves go back and forth?",
      options: ["Moo", "Meow", "Splash", "Quack"],
      correct_option: "Splash"
    },
    {
      question: "What do we call the organization that sends astronauts into space and explores the stars and planets, like the moon?",
      options: ["Science Club", "Toy Store", "NASA (National Aeronautics and Space Administration)", "Cookie Shop"],
      correct_option: "NASA (National Aeronautics and Space Administration)"
    }
  ];
        console.log(QuizData[0].options)
    return (
      <>
        {/* {QuizData.map((quiz) => (
          <QuizShow
            question={quiz.question}
            options={quiz.options}
            correct_option={quiz.correct_option}
          ></QuizShow>
        ))} */}
        <QuizShow
            question={QuizData[0].question}
            options={QuizData[0].options}
            correct_option={QuizData[0].correct_option}
          ></QuizShow>
      </>
    );
  }
  
  function LeftSection(){
    return(
        <>
        <QuizPostShow></QuizPostShow>
        </>
    )
  }
  
  
  
  export default LeftSection;
  