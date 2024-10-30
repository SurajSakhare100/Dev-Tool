import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

const SimpleMarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('# Your Markdown Here\n\n- List item 1\n- List item 2\n- List item 3\n\n```javascript\nconsole.log("Hello, World!");\n```');

  return (
    <div  className='mt-32 flex'>
      <div style={{ width: '50%', padding: '10px', border: '1px solid #ccc' }}>
        <MDEditor
          value={markdown}
          onChange={setMarkdown}
          preview="edit" // Edit mode only
          height={400}
          style={{ border: 'none' }}
        />
      </div>
      <div style={{ width: '50%', padding: '10px', border: '1px solid #ccc' }}>
        <h2>Preview:</h2>
        <MDEditor.Markdown source={markdown} />
      </div>
    </div>
  );
};

export default SimpleMarkdownEditor;
