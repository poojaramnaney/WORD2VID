import re
import openai
import fitz
import openai
import nltk

from api_key import API_KEY

context = ""
import PyPDF2

openai.api_key = API_KEY
def read_pdf(file_path):
    with open(file_path, 'rb') as pdf_file:
        pdf_reader = PyPDF2.PdfReader(pdf_file)

        text = ''
        for page_num in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[page_num]
            text += page.extract_text()

        return text
# Open the PDF file with straight single quotes
with fitz.open('Osi_model.pdf') as pdf_file:

    # Get the number of pages in the PDF file
    num_pages = pdf_file.page_count

    # Loop through each page in the PDF file
    for page_num in range(num_pages):

        # Get the current page
        page = pdf_file[page_num]

        # Get the text from the current page
        page_text = page.get_text()

        # Append the text to context
        context += page_text


def gpt3_completion(prompt, engine='text-davinci-003', temp=0.5, top_p=0.3, tokens=1000):
    prompt = prompt.encode(encoding='ASCII', errors='ignore').decode()
    try:
        response = openai.Completion.create(
            engine=engine,
            prompt=prompt,
            temperature=temp,
            max_tokens=tokens,
            top_p=top_p
        )
        return response.choices[0].text.strip()
    except Exception as oops:
        return "GPT-3 error: %s" % oops

# nltk.download('punkt')

def summarize(document):
    # Convert the document bytes to a string using the appropriate encoding
      # Change 'utf-8' to the actual encoding if different
    prompt = "Please summarize the following document: \n"
    summary = gpt3_completion(prompt + document)
    return summary

# Read the PDF file
document = read_pdf("Osi_model.pdf")

# Call the summarize function with the document as input
result = summarize(document)
with open ('generated_text.txt','w') as file :
    file.write(result)


