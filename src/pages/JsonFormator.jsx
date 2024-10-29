import React, { useState } from 'react';
import { Trash2, Copy, Download } from 'lucide-react';

function JsonFormatter() {
  const [jsonData, setJsonData] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const handleJsonChange = (e) => {
    setJsonData(e.target.value);
  };

  const clearJson = () => {
    setJsonData('');
    setFormattedJson('');
  };

  const formatJson = () => {
    try {
      const parsedJson = JSON.parse(jsonData);
      setFormattedJson(JSON.stringify(parsedJson, null, 2));
    } catch (error) {
      alert('Invalid JSON format. Please check your input.');
    }
  };

  const downloadJson = () => {
    const blob = new Blob([formattedJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted.json';
    a.click();
  };

  const copyJson = () => {
    navigator.clipboard.writeText(formattedJson)
      .then(() => setCopySuccess('JSON copied to clipboard!'))
      .catch(() => setCopySuccess('Failed to copy JSON.'));
    setTimeout(() => setCopySuccess(''), 2000);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen mt-20">
      <h1 className="text-3xl font-bold mb-6">JSON Formatter</h1>
      
      <div className="relative w-full md:w-2/3 mb-4">
        <textarea
          className="w-full h-40 p-4 border border-gray-300 rounded-md"
          placeholder="Paste your JSON here"
          value={jsonData}
          onChange={handleJsonChange}
        />
        <button
          className="absolute top-2 right-6 sm:right-8 px-2 py-1 md:py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 flex items-center gap-1"
          onClick={clearJson}
        >
          <Trash2 size={16} />
         <p className='hidden md:block'> Clear JSON</p>
        </button>
      </div>

      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={formatJson}
      >
        Format JSON
      </button>

      {formattedJson && (
        <div className="w-full md:w-2/3">
          <textarea
            className="w-full h-40 p-4 border border-gray-300 rounded-md mb-4"
            value={formattedJson}
            readOnly
          />
          <div className="flex gap-4">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center gap-1"
              onClick={downloadJson}
            >
              <Download size={16} />
              Download JSON
            </button>
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 flex items-center gap-1"
              onClick={copyJson}
            >
              <Copy size={16} />
              Copy JSON
            </button>
          </div>
          {copySuccess && <p className="text-green-500 mt-2">{copySuccess}</p>}
        </div>
      )}
    </div>
  );
}

export default JsonFormatter;
