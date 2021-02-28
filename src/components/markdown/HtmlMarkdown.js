import React, { useState } from 'react';

const HtmlMarkdown = () => {
  const [textEditorData, settextEditorData] = useState('');
  const [textEditorOutputData, settextEditorOutputData] = useState([]);

  const parseText = (e) => {
    settextEditorData(e.target.value);
    const arr = [];
    e.target.value.split(/ \/ /g).map((item, index) => {
      if (/\[[\w\s\S]+\]\(https:\/\/[^\s]+\)/g.test(item)) {
        if (arr.length > 0) {
          arr.push(' / ');
        }
        arr.push(
          <a key={index} href={item.match(/https:\/\/[^\s)]+/g)}>
            {item
              .match(/\[[\w\s]+\]/g)
              .join('')
              // eslint-disable-next-line no-useless-escape
              .replace(/[\[\]]/g, '')}
          </a>
        );
      } else {
        arr.push(<p>{item}</p>);
      }
    });
    settextEditorOutputData(<kbd>{arr}</kbd>);
  };

  const heading = `
  [Github](https://github.com/DDCreationStudios) / [FreeCodeCamp](https://www.freecodecamp.com/ddcreationstudios)
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

export default HtmlMarkdown;
