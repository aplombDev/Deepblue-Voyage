import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

// CSS for the circular timer
const circularTimerStyles = {
  timerContainer: {
    position: 'relative',
    width: '100px',
    height: '100px',
    margin: '20px 20px 20px 0', // Updated margin to move it to the left
    float: 'left', // Added float to align it to the left
  },
  timerValue: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '24px',
    fontWeight: 'bold',
    zIndex: '2',
  },
 
};

function QuizShow({ QuizData }) {
  const [count, setCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [timerRunning, setTimerRunning] = useState(true);
  const [questionsAttempted, setQuestionsAttempted] = useState(0);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (time > 0 && timerRunning) {
        setTime(time - 1);
      } else if (timerRunning) {
        handleNext();
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [time, timerRunning]);

  useEffect(() => {
    if (count < QuizData.length) {
      setTimerRunning(true);
      setTime(10);
      setNextButtonDisabled(true);
    } else {
      setTimerRunning(false);
    }
  }, [count, QuizData]);

  function handleNext() {
    setQuestionsAttempted(questionsAttempted + 1);

    if (selectedAnswer === QuizData[count].correct_option) {
      setScore(score + 1);
    }

    setCount(count + 1);
    setSelectedAnswer(null);
    setNextButtonDisabled(true);
  }

  const questionTitle = {
    color: 'black',
    paddingTop: '10px',
    paddingBottom: '30px',
    borderRadius: '5px',
  };

  const card = {
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginTop: '5px',
    // backgroundColor: '#02BFE7',
  };

  const scoreStyle = {
    color: 'black',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
  };

  const topInfoStyle = {
    color: 'black',
    fontSize: '16px',
    marginTop: '20px',
    textAlign: 'right',
    
  };

  const handleAnswerClick = (answer) => {
    if (timerRunning) {
      setTimerRunning(false);
      setNextButtonDisabled(false);
    }

    if (answer === QuizData[count].correct_option) {
      setSelectedAnswer(answer);
    } else {
      setSelectedAnswer(answer);
      setTimeout(() => {
        setSelectedAnswer(QuizData[count].correct_option);
      }, 1000);
    }
  };

  return (
    <>
      <div className="" style={card}>
        <div style={circularTimerStyles.timerContainer}>
          <div style={circularTimerStyles.timerValue}>{time}</div>
          <svg
            className="circular-progress"
            style={circularTimerStyles.circularProgress}
          >
            <circle
              className="circle"
              cx="50%"
              cy="50%"
              r="45%"
              strokeWidth="5%"
              fill="transparent"
              strokeDasharray="283"
              strokeDashoffset={(283 * (10 - time)) / 10}
            ></circle>
          </svg>
        </div>
        <div style={topInfoStyle}>
          Attempted: {questionsAttempted}/{QuizData.length}
        </div>
        <div style={scoreStyle}>
          Score: {score}/{questionsAttempted}
        </div>
        <h1 className="" style={questionTitle}>
          {QuizData[count].question}
        </h1>
        <div className="pt-30 mt-30 text-white">
          <div>
            {QuizData[count].options.map((option, index) => (
              <Button
                key={index}
                variant="contained"
                style={{
                  backgroundColor:
                    selectedAnswer === option
                      ? option === QuizData[count].correct_option
                        ? 'green'
                        : 'red'
                      : '',
                  color: 'white',
                  width: '100%',
                  marginBottom: '10px',
                }}
                onClick={() => handleAnswerClick(option)}
                disabled={!timerRunning}
              >
                {option}
              </Button>
            ))}
            <Button
              variant="contained"
              style={{
                backgroundColor: 'green',
                color: 'white',
                width: '100%',
                marginBottom: '10px',
                float: 'right',
              }}
              onClick={handleNext}
              disabled={nextButtonDisabled}
            >
              Next
            </Button>
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
      correct_option: "Anteater"
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
           QuizData={QuizData}
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
  