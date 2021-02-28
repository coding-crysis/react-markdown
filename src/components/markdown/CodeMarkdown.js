import React, { useState } from 'react';

const CodeMarkdown = () => {
  const [textEditorData, settextEditorData] = useState('');
  const [textEditorOutputData, settextEditorOutputData] = useState([]);

  const parseText = (e) => {
    settextEditorData(e.target.value);
    const arr = [];
    // eslint-disable-next-line no-useless-escape
    if (/^(\`\`\`)[^\`]+(\`\`\`)$/gm.test(e.target.value)) {
      // eslint-disable-next-line no-useless-escape
      arr.push(<code>{e.target.value.match(/[^\`]+/g)}</code>);
    } else {
      arr.push(<p>{e.target.value}</p>);
    }
    settextEditorOutputData(arr);
  };

  const heading = `
  \`\`\` Some Text \`\`\`
  `;

  return (
    <div>
      <div style={{ width: '100%' }}>
        <div style={{ width: '100%' }}>
          <h4 className="markdown-headers">Markdown Input</h4>
          <div>
            <textarea
              rows="10"
              style={{ width: '100%' }}
              placeholder={heading}
              onKeyUp={(e) => {
                parseText(e);
              }}
            >
              {textEditorData}
            </textarea>
          </div>
        </div>
        <div
          style={{
            width: '100%',
          }}
        >
          <h4 className="markdown-headers">Preview</h4>
          <div className="text-editor-div">{textEditorOutputData}</div>
        </div>
      </div>
    </div>
  );
};

export default CodeMarkdown;
