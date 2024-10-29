// src/PdfConverter.js

import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const PdfConverter = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [error, setError] = useState('');

  const handleDownload = () => {
    if (!htmlContent) {
      setError('Please upload an HTML file first.');
      return;
    }

    // Create a temporary div to hold the HTML content
    const element = document.createElement('div');
    element.innerHTML = htmlContent;

    // Optionally include styles for rendering
    const styles = `
      <style>
        /* You can include any styles that are needed for proper rendering */
        body { font-family: Arial, sans-serif; }
        /* Add more styles as necessary */
      </style>
    `;
    element.innerHTML = styles + element.innerHTML;

    // Set options for pdf generation
    const options = {
      margin: 1,
      filename: 'document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    // Generate the PDF
    html2pdf().from(element).set(options).save();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setHtmlContent(e.target.result);
        setIsFileUploaded(true);
        setError(''); // Clear any previous errors
      };

      reader.readAsText(file); // Read the content of the HTML file as text
    } else {
      setError('Invalid file. Please upload a valid HTML file.');
    }
  };
  useEffect(() => {
    document.title = 'Html to Pdf Convertor';
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-[40rem] bg-gray-100 p-4 mx-auto w-full lg:max-w-[66rem] mt-20 rounded-md">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">HTML to PDF Converter</h1>
        <input
          type="file"
          accept=".html"
          onChange={handleFileChange}
          className="mb-4 border border-gray-300 p-2 rounded w-full"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {isFileUploaded && (
          <button
            onClick={handleDownload}
            className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center"
          >
            <Download className="mr-2" /> Download PDF
          </button>
        )}
        <p className="text-sm text-gray-500 mt-4">
          Upload an HTML file to generate a PDF.
        </p>
      </div>
    </div>
  );
};

export default PdfConverter;
