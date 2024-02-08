def break_paragraph(paragraph):
    para = paragraph.split(".")
    print(para)

    for line in para:

        words = line.split(" ")
        for i in range(0,len(line),6):
            five_words=' '.join(words[i:i+6])
            print(five_words)




# Example usage
paragraph = "This is a sample paragraph. It demonstrates how to break a paragraph into five words or less, maintaining sentence structure."
broken_paragraph = break_paragraph(paragraph)
print(broken_paragraph)