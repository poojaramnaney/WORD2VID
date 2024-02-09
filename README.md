# Word2Vid-Wiegnite
## Introduction
Introducing Pip My Script, a groundbreaking solution designed to tackle the common struggles college students encounter with PDF reading and comprehension. Recognizing the prevalent preference for video content over traditional text, Pip My Script offers a transformative approach, enabling users to effortlessly convert textual material into captivating video presentations. With this innovative tool, users can delve into their study materials through engaging visual content, enhancing understanding and retention while fostering creativity and adaptability.

### Does it solve any real-life problem?
Yes, Pip My Script addresses the real-life problem of transforming textual content, such as PDF documents or prompts, into engaging video content. This solution caters to individuals, particularly visual learners, who prefer consuming information through videos rather than text-based materials. Additionally, it offers a more efficient way for users to convey information or ideas in a visually appealing format.
### How marketable is the problem solved by the project?
The problem solved by Pip My Script is highly marketable, especially in educational and professional settings where effective communication and content delivery are essential. By providing a seamless and innovative tool for creating videos from textual content, Pip My Script offers a competitive advantage over existing solutions. Its nominal pricing and additional feature of speech conversion further enhance its marketability, making it appealing to a wide range of users.
### Is it safe, has it been tested?
Yes, it is safe. It has been tested with different test case scenarios from long pdf to short texts.
### Is the project working without any errors?
Yes, the project works without any errors. It just takes a little long time to generate video of a long text or pdf due to content parsing, so a little patience then is appreciated.

## Technology Used:
* Frontend: Utilizing Fastn for a sleek and responsive user interface, ensuring an intuitive experience for users interacting with the platform.
* OpenAI API Integration: Leveraging the OpenAI API to seamlessly incorporate relevant pictures into the video content, enhancing visual appeal and comprehension.
* Backend Development: Employing Python for robust backend functionality, facilitating efficient processing and management of user requests and data.


## Features of Word2Vid
* Creating videos from prompts and PDF
* Nominal Cost
* Better than others already available in market 
* Speech conversion as well
## 🚀 Project Structure 


### Backend

```
/backend
├── .__pycache__/
│   └── API_KEY
├── .idea/
│   └── modules and script
│   	└── All downloaded dependencies
├── use.py - splits the pdf into smaller segments	
├── text_gen.py
├── video_gen.py
└── final_vide.mp4 - the final output generated
```
## 🧞 Commands for Frontend

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `fastn build`            | FASTN builder installs all `FASTN` dependencies        |
| `fastn serve`            | Starts local dev server at available port`localhost:8000`          |

## 🧞  Commands for Backend Setup

This repository contains a backend folder in which there are scripts for text generation and video generation from PDFs.

### Structure

- `text_gen.py`: Script for generating text using OpenAI's GPT-3 model.
- `textgen_pdf.py`: Script for generating videos from PDFs.
- `api_key.py`: Python file to store your OpenAI API key.
- `Osi_model.pdf`: Sample PDF file used for text generation (you can replace it with your own PDF).

### Usage

1. Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project_directory>
    ```
2. Navigate to the backend directory:

    ```bash
    cd backend
    ```
3. Install the required Python packages:

    ```bash
    pip install -r requirements.txt
    ```

4. Create a file named `api_key.py` in the same directory as the scripts:

    ```bash
    echo "API_KEY = 'your_openai_api_key_here'" > api_key.py
    ```

    Replace `'your_openai_api_key_here'` with your actual OpenAI API key.

5. Run `text_gen.py` to generate text:

    ```bash
    python text_gen.py
    ```

6. Run `textgen_pdf.py` to generate videos from a PDF file:

    ```bash
    python textgen_pdf.py
    ```

Make sure you have a PDF file in the same directory. You can use any PDF file of your choice. For example, we have provided `Osi_model.pdf` as a sample.

### Notes

- Ensure that the PDF file you want to use for text generation is in the same directory as the script.
- Replace `your_openai_api_key_here` with your actual OpenAI API key in `api_key.py`.


## Video Demo
https://youtu.be/t5sqSTbHwYg?feature=shared

## PDFs
Presentation Link: Click [here](https://drive.google.com/file/d/1MYBd0IoHv2-GVprKm1tLwoM2sha2gYzr/view?usp=sharing) to go to our presentation.



