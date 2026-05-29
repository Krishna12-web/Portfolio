import PyPDF2
import json

pdf_path = 'Profile (1).pdf'
with open(pdf_path, 'rb') as file:
    pdf_reader = PyPDF2.PdfReader(file)
    print(f'Total pages: {len(pdf_reader.pages)}')
    print('='*80)
    all_text = []
    for i, page in enumerate(pdf_reader.pages):
        print(f'PAGE {i+1}:')
        print('='*80)
        text = page.extract_text()
        all_text.append(text)
        print(text)
        print('\n')
    
    # Save to a text file for reference
    with open('pdf_content.txt', 'w', encoding='utf-8') as f:
        for i, text in enumerate(all_text):
            f.write(f'PAGE {i+1}:\n')
            f.write('='*80 + '\n')
            f.write(text)
            f.write('\n\n')
    print("Content saved to pdf_content.txt")
