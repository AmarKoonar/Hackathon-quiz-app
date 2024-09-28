import React, { useState, useRef } from 'react';
import './App.css';
import { data } from './assets/data'; 

const App = () => {
  const [index, setIndex] = useState(0); 
  const [question, setQuestion] = useState(data[index]); 
  const [lock, setLock] = useState(false); 
  const [score, setScore] = useState(0); // State to track the score
  
  // Define all option refs
  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);
  
  const optionArray = [Option1, Option2, Option3, Option4]; 

  const checkAns = (e, ans) => {
    if (!lock) { 
      if (question.ans === ans) { 
        e.target.classList.add('correct');
        setScore(prev => prev + 1); // Increment score
      } 
      else { 
        e.target.classList.add('wrong');
        optionArray[question.ans - 1].current.classList.add('correct');
      }
      setLock(true); 
    }
  };

  const nextQuestion = () => {
    if (index < data.length - 1) {
      optionArray.forEach(option => option.current.classList.remove('correct', 'wrong'));
      
      const newIndex = index + 1;
      setIndex(newIndex);
      setQuestion(data[newIndex]);
      setLock(false); 
    }
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>{index + 1}. {question.question}</h2>
      <ul>
        <li ref={Option1} onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
        <li ref={Option2} onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
        <li ref={Option3} onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
        <li ref={Option4} onClick={(e) => checkAns(e, 4)}>{question.option4}</li>
      </ul>
      <button type="button" onClick={nextQuestion}>Next</button>
      <br />
      <div className="questions">{index + 1} of {data.length} questions</div>
      <div className="score">Score: {score}</div> {/* Display the score */}
    </div>
  );
}

export default App;
