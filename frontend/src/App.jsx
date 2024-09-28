import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';  // Ensure axios is installed via npm install axios
import './App.css';

const App = () => {
  const [index, setIndex] = useState(0);            // Track the current question index
  const [questions, setQuestions] = useState([]);   // Store the fetched questions
  const [loading, setLoading] = useState(true);     // Loading state for when data is being fetched
  const [lock, setLock] = useState(false);          // Lock for preventing multiple selections
  const [score, setScore] = useState(0);            // State to track the score

  // Define all option refs
  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const optionArray = [Option1, Option2, Option3, Option4];  // Array to manage refs

  // Fetch questions from the backend
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/questions')  // Replace with your backend URL if needed
      .then(response => {
        setQuestions(response.data);  // Store questions in state
        setLoading(false);             // Stop loading once data is fetched
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
        setLoading(false);  // Stop loading even if there's an error
      });
  }, []);  // Empty dependency array ensures this effect runs only once

  // Check if the selected option is correct
  const checkAns = (e, ans) => {
    if (!lock) { 
      if (questions[index].ans === ans) { 
        e.target.classList.add('correct');
        setScore(prev => prev + 1);  // Increment score if correct
      } else { 
        e.target.classList.add('wrong');  // Mark wrong answer
        optionArray[questions[index].ans - 1].current.classList.add('correct');  // Highlight correct answer
      }
      setLock(true);  // Lock the answers for this question
    }
  };

  // Move to the next question
  const nextQuestion = () => {
    if (index < questions.length - 1) {
      // Clear all option classes for the next question
      optionArray.forEach(option => option.current.classList.remove('correct', 'wrong'));
      
      const newIndex = index + 1;
      setIndex(newIndex);  // Move to next question
      setLock(false);  // Unlock for new question
    }
  };

  // Show a loading message if data is still being fetched
  if (loading) {
    return <div>Loading questions...</div>;
  }

  // If no questions are returned from the backend
  if (questions.length === 0) {
    return <div>No questions available</div>;
  }

  const question = questions[index];  // Get the current question based on the index

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {/* Display current question */}
      <h2>{index + 1}. {question.question}</h2>
      <ul>
        {/* Use refs and bind click handlers to check answer */}
        <li ref={Option1} onClick={(e) => checkAns(e, 1)}>{question.options[0]}</li>
        <li ref={Option2} onClick={(e) => checkAns(e, 2)}>{question.options[1]}</li>
        <li ref={Option3} onClick={(e) => checkAns(e, 3)}>{question.options[2]}</li>
        <li ref={Option4} onClick={(e) => checkAns(e, 4)}>{question.options[3]}</li>
      </ul>
      <button 
        type="button" 
        onClick={nextQuestion} 
        disabled={index >= questions.length - 1}  // Disable "Next" button on the last question
      >
        Next
      </button>
      <br />
      {/* Display current question number and score */}
      <div className="questions">{index + 1} of {questions.length} questions</div>
      <div className="score">Score: {score}</div>  {/* Display the score */}
    </div>
  );
}

export default App;
