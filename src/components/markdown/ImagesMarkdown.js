import React, { useState } from 'react';

const ImagesMarkdown = () => {
  const [textEditorData, settextEditorData] = useState('');
  const [textEditorOutputData, settextEditorOutputData] = useState([]);

  const parseText = (e) => {
    settextEditorData(e.target.value);
    const arr = [];
    e.target.value.split(/\n/).map((item, index) => {
      // eslint-disable-next-line no-useless-escape
      if (/\!\[[^\n]+\]\(https:\/\/[^\s]+\)/gim.test(item)) {
        arr.push(
          <img
            src={item.match(/https:\/\/[^\s]+\.(png|jpg|jpeg|gif)/gim)}
            // eslint-disable-next-line no-useless-escape
            alt={item.match(/\!\[[^\n]+\]\)/gim)}
            width="200"
            height="200"
          />
        );
      } else {
        arr.push(<p key={index}>{item}</p>);
      }
    });
    settextEditorOutputData(arr);
  };

  const heading = `
  ![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)
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

export default ImagesMarkdown;
