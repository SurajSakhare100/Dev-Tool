import React, { useState } from 'react';
import { Trash2, Download, Copy } from 'lucide-react';

function JsontoCsv() {
  const [jsonData, setJsonData] = useState('');
  const [csvData, setCsvData] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const handleJsonChange = (e) => {
    setJsonData(e.target.value);
  };

  const clearJson = () => {
    setJsonData('');
  };

  const convertToCsv = () => {
    try {
      const jsonObject = JSON.parse(jsonData);
      const headers = Object.keys(jsonObject[0]);
      const csvRows = jsonObject.map(obj =>
        headers.map(header => JSON.stringify(obj[header] || '')).join(',')
      );
      setCsvData([headers.join(','), ...csvRows].join('\n'));
    } catch (error) {
      alert('Invalid JSON format. Please check your input.');
    }
  };

  const downloadCsv = () => {
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted.csv';
    a.click();
  };

  const copyCsv = () => {
    navigator.clipboard.writeText(csvData)
      .then(() => setCopySuccess('CSV copied to clipboard!'))
      .catch(() => setCopySuccess('Failed to copy CSV.'));
    setTimeout(() => setCopySuccess(''), 2000); // Reset message after 2 seconds
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen rounded-lg mt-20">
      <h1 className="text-3xl font-bold mb-6">JSON to CSV Converter</h1>
      
      <div className="relative w-full md:w-2/3 mb-4">
        <textarea
          className="w-full h-40 p-4 border border-gray-300 rounded-md"
          placeholder="Paste your JSON here"
          value={jsonData}
          onChange={handleJsonChange}
        />
        <button
          className="absolute top-2 right-4 sm:right-6 px-2 py-1 md:py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 flex items-center gap-1"
          onClick={clearJson}
        >
          <Trash2 size={16} />
          <p className='hidden sm:block'>Clear JSON</p>
        </button>
      </div>

      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={convertToCsv}
      >
        Convert to CSV
      </button>

      {csvData && (
        <div className="w-full md:w-2/3">
          <textarea
            className="w-full h-40 p-4 border border-gray-300 rounded-md mb-4"
            value={csvData}
            readOnly
          />
          <div className="flex gap-4">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center gap-1"
              onClick={downloadCsv}
            >
              <Download size={16} />
              Download CSV
            </button>
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 flex items-center gap-1"
              onClick={copyCsv}
            >
              <Copy size={16} />
              Copy CSV
            </button>
          </div>
          {copySuccess && <p className="text-green-500 mt-2">{copySuccess}</p>}
        </div>
      )}
    </div>
  );
}

export default JsontoCsv;
