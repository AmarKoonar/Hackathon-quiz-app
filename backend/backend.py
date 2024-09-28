from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


# Example questions array (2D)
questions = [
    ["What is the capital of France?", ["Paris", "London", "Berlin", "Madrid"], "Paris"],
    ["What is 2 + 2?", ["3", "4", "5", "6"], "4"],
    ["Who wrote 'Hamlet'?", ["Shakespeare", "Tolstoy", "Hemingway", "Orwell"], "Shakespeare"]
]

@app.route('/get_random_question', methods=['GET'])
def get_random_question():
    # Randomly select a question
    question = random.choice(questions)
    return jsonify({
        "question": question[0],
        "options": question[1]
    })

if __name__ == '__main__':
    app.run(debug=True)

