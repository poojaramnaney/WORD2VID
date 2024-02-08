from flask import Flask, request
from flask_restful import Resource, Api
from gtts import gTTS
from moviepy.editor import *
import openai
from api_key import API_KEY
import re

# Set your OpenAI API key
openai.api_key = API_KEY

@app.route('/videogeneration')

def post(self):
    data = request.get_json()
    text = data.get("text")

    # Split the text by , and . while considering the character limit
    split_text = re.split(r'([.,])', text)
    paragraphs = [''.join(split_text[i:i + 2]) for i in range(0, len(split_text), 2)]

    # Create Necessary Folders
    os.makedirs("audio")
    os.makedirs("images")
    os.makedirs("videos")

    i = 1
    videos = []

    for para in paragraphs:
        # Add a condition to split when the paragraph length is greater than 50
        if len(para) > 50:
            split_paragraphs = re.split(r'([.,])', para)
            para = [''.join(split_paragraphs[i:i + 2]) for i in range(0, len(split_paragraphs), 2)]

        for sub_para in para:
            # Rest of your code for generating videos goes here
            # ...

            # Append video file paths to the videos list
            video_path = f"videos/video{i}.mp4"
            videos.append(video_path)

    # Concatenate the video clips into a final video
    clips = [VideoFileClip(video) for video in videos]
    final_video = concatenate_videoclips(clips, method="compose")
    final_video_path = "final_video.mp4"
    final_video.write_videofile(final_video_path, fps=24)

    return {"message": "Video generation successful", "video_path": final_video_path}




if __name__ == "__main__":
    app.run(debug=True)