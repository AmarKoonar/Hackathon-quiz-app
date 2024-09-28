from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import random



app = Flask(__name__)

CORS(app, support_credentials=True)

@app.route("/", methods=['GET'])
@cross_origin(supports_credentials=True)
def randomquestion():
    quiz_data = [
    ["What is the capital of France?", "Berlin", "London", "Paris", "Rome", "Paris"],
    ["Which planet is known as the Red Planet?", "Earth", "Venus", "Mars", "Jupiter", "Mars"],
    ["What is the largest ocean on Earth?", "Atlantic", "Indian", "Arctic", "Pacific", "Pacific"],
    ["Who wrote 'Hamlet'?", "Charles Dickens", "William Shakespeare", "Mark Twain", "J.K. Rowling", "William Shakespeare"]]
    return jsonify(quiz_data)

from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route("/questions", methods=['GET'])
@cross_origin(supports_credentials=True)
def get_questions():
    quiz_data = [
        {
            "question": "What is 2 + 2?",
            "options": ["3", "4", "5", "6"],
            "ans": 2  # Correct answer is option 3 (5)
        },
        {
            "question": "What is the capital of France?",
            "options": ["Berlin", "Paris", "Madrid", "Rome"],
            "ans": 2  # Correct answer is option 2 (Paris)
        },
        {
            "question": "Which planet is known as the Red Planet?",
            "options": ["Earth", "Venus", "Mars", "Jupiter"],
            "ans": 3  # Correct answer is option 3 (Mars)
        },
        {
            "question": "Who wrote the play 'Hamlet'?",
            "options": ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Mark Twain"],
            "ans": 3  # Correct answer is option 3 (William Shakespeare)
        },
        {
            "question": "Which gas is most abundant in Earth's atmosphere?",
            "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            "ans": 2  # Correct answer is option 2 (Nitrogen)
        },
        {
            "question": "What is 15 - 6?",
            "options": ["7", "8", "9", "10"],
            "ans": 3  # Correct answer is option 3 (9)
        },
        {
            "question": "What is the capital of Japan?",
            "options": ["Tokyo", "Beijing", "Seoul", "Bangkok"],
            "ans": 1  # Correct answer is option 1 (Tokyo)
        },
        {
            "question": "Which element has the chemical symbol 'O'?",
            "options": ["Osmium", "Oxygen", "Gold", "Oganesson"],
            "ans": 2  # Correct answer is option 2 (Oxygen)
        },
        {
            "question": "What is the largest continent by land area?",
            "options": ["Africa", "Asia", "Europe", "North America"],
            "ans": 2  # Correct answer is option 2 (Asia)
        },
        {
            "question": "Which organ in the human body is primarily responsible for filtering blood?",
            "options": ["Heart", "Lungs", "Kidneys", "Liver"],
            "ans": 3  # Correct answer is option 3 (Kidneys)
        },
        {
            "question": "How many sides does a hexagon have?",
            "options": ["5", "6", "7", "8"],
            "ans": 2  # Correct answer is option 2 (6)
        },
        {
            "question": "What is the largest planet in the Solar System?",
            "options": ["Earth", "Mars", "Jupiter", "Saturn"],
            "ans": 3  # Correct answer is option 3 (Jupiter)
        },
        {
            "question": "What year did World War I start?",
            "options": ["1912", "1914", "1916", "1918"],
            "ans": 2  # Correct answer is option 2 (1914)
        },
        {
            "question": "Which animal is known as the King of the Jungle?",
            "options": ["Tiger", "Elephant", "Lion", "Bear"],
            "ans": 3  # Correct answer is option 3 (Lion)
        },
        {
            "question": "What is the boiling point of water at sea level?",
            "options": ["50°C", "90°C", "100°C", "110°C"],
            "ans": 3  # Correct answer is option 3 (100°C)
        },
        {
            "question": "What is the most spoken language in the world?",
            "options": ["English", "Mandarin Chinese", "Spanish", "Hindi"],
            "ans": 2  # Correct answer is option 2 (Mandarin Chinese)
        },
        {
            "question": "Who developed the theory of relativity?",
            "options": ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Marie Curie"],
            "ans": 3  # Correct answer is option 3 (Albert Einstein)
        },
        {
            "question": "Which country is the Eiffel Tower located in?",
            "options": ["Germany", "Spain", "France", "Italy"],
            "ans": 3  # Correct answer is option 3 (France)
        },
        {
            "question": "What is the square root of 64?",
            "options": ["6", "7", "8", "9"],
            "ans": 3  # Correct answer is option 3 (8)
        },
        {
            "question": "What is the smallest prime number?",
            "options": ["0", "1", "2", "3"],
            "ans": 3  # Correct answer is option 3 (2)
        }
    ]
    return jsonify(quiz_data)

if __name__ == '__main__':
    app.run(debug=True)
