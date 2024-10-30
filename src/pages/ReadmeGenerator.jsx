import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import markdownItTaskLists from 'markdown-it-task-lists';
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-http';
import { Clipboard, Trash } from 'lucide-react';

const MarkdownRenderer = () => {
  const [markdownText, setMarkdownText] = useState(`
# Hello, Markdown!
## This is a list:
- Item 1
- Item 2
  - Sub-item 1
  - Sub-item 2

## And here is a table:
| Header 1 | Header 2 |
|----------|----------|
| Row 1    | Data 1   |
| Row 2    | Data 2   |

## Task List:
- [x] Task 1
- [ ] Task 2

## Code Examples:
\`\`\`http
GET /api/data
Host: example.com
\`\`\`

`);

  const [view, setView] = useState('preview');
  const md = new MarkdownIt().use(markdownItTaskLists);

  const handleChange = (event) => {
    setMarkdownText(event.target.value);
  };

  const renderedMarkdown = md.render(markdownText);
  setTimeout(() => Prism.highlightAll(), 0);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(renderedMarkdown);
    alert('Copied to clipboard!');
  };

  const clearText = () => {
    setMarkdownText('');
  };
  const addgitprofile=()=>{
    setMarkdownText(`
I am a bachelor's student at {} . I am a {} from India with a proven ability to deliver high-quality solutions. Currently working on My Projects.

- 🔭 I’m currently working on **{on project}**

- 🌱 I’m currently learning ** this task **

- 👨‍💻 All of my projects are available at My Portfolio website -- {add your link}
`)
  }
  return (
    <div className="w-full ">
      <div className="w-[66rem] mx-auto mt-20 h-[44rem]  flex flex-col mb-10">
        <h2 className="tagline text-5xl">Create Your <span className='text-[#10B981]'>README</span>  me Now</h2>
        <div className="flex flex-col gap-4 md:flex-row h-full w-full">
          <div className="flex flex-col gap-2 md:w-1/2 h-full">
            <div className="flex gap-2 justify-between pb-2">
              <div>
                <button className='bg-[#10b981c4] font-bold px-2 py-1 rounded-md' onClick={addgitprofile} >Create Your github Profile </button>
              </div>
             <div>
             <button onClick={copyToClipboard} className="icon-button text-green-400 font-semibold">
                <Clipboard size={16} />
              </button>
              <button onClick={clearText} className="icon-button text-red-400 font-semibold">
                <Trash size={16} />
              </button>
             </div>
            </div>
            <textarea
              className="textarea h-full"
              value={markdownText}
              onChange={handleChange}
            />
          </div>
          <div className="preview-container md:w-1/2 flex flex-col h-full  ">
            <div className="flex gap-2 justify-end options pb-2 ">
              <button onClick={() => setView('preview')} className={view === 'preview' ? 'active' : ''}>
                Preview
              </button>
              <button onClick={() => setView('raw')} className={view === 'raw' ? 'active' : '' } >
                Raw
              </button>
            </div>
            <div className="preview border p-4 rounded-lg h-full overflow-y-scroll ">
              {view === 'preview' ? (
                <div dangerouslySetInnerHTML={{ __html: renderedMarkdown }} />
              ) : (
                <pre className="raw">{markdownText}</pre>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownRenderer;
