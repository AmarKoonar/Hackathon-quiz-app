import React from 'react';
import './App.css';
import { data } from './assets/data';

const App = () => {

  const[index,setIndex] = useState(0);
  const[question,setQuestion] = useState(data[index]);

  const nextQuestion = () => {
    if (index < data.length - 1) {
      const newIndex = index + 1;
      setIndex(newIndex);
      setQuestion(data[newIndex]);
    }
  };

    return (
        <div className="container">
            <h1>Quiz App</h1>
            <hr />
            <h2>{index+1}.{question.question}</h2>
            <ul>
              <li>{question.option1}</li>
              <li>{question.option2}</li>
              <li>{question.option3}</li>
              <li>{question.option4}</li>
            </ul>
            <button type="button">Next</button>
            <br />
            <div className="questions">1 of out # questions</div>
        </div>
    );
}
export default App;
