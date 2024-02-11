from flask import Flask,jsonify
from flask import request
from flask_cors import CORS
import openai
from gtts import gTTS
from api_key import API_KEY
openai.api_key = API_KEY
from text_gen import generate_text
from video_gen import generatevideo

import re, os
import urllib.request
from gtts import gTTS
from moviepy.editor import *
from moviepy.config import change_settings
import shutil

app = Flask(__name__)
CORS(app)
@app.route('/api/process_input', methods=['POST'])
def process_input():
    data = request.json
    # Process the input data here
    prompt = data.get('prompt')
    generate_text(prompt)
    generatevideo()
    # try:
    #     subprocess.run(['python', 'video_gen.py'], check=True)
    # except subprocess.CalledProcessError as e:
    #     print(f"Error: {e}")
    # Do something with the prompt
    return jsonify({'message': 'Input received successfully'})

if __name__ == '__main__':
    app.run(debug=True)
"""
@app.route("/", methods=['POST'])
def index():
    if request.method == "POST":
        f = request.files['audio_data']
        with open('audio.wav', 'wb') as audio:
            f.save(audio)
        print('file uploaded successfully')


        return render_template('index.html', request="POST")


    else:
        return render_template("index.html")
    main_function()
"""