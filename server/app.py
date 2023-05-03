from flask import Flask, request, jsonify
import joblib
import os

app = Flask(__name__)

filename = 'server\pipeline.sav'
# Load the pre-trained machine learning model pipeline
model = joblib.load(filename)

@app.route('/predict', methods=['POST'])
def predict():
    # Get the data from the request
    data = request.json

    # Extract the required features from the data
    author = data.get('author')
    source = data.get('source')
    statement = data.get('statement')
    date = data.get('date')

    # Concatenate the features into a single string
    test = f"{author} {source} {statement} {date}"

    # Perform prediction using the loaded model pipeline
    result = model.predict([test])

    # Create a response dictionary
    response = {
        'result': result.tolist()
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
