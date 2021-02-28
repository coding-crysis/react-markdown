import React, { useState } from 'react';

const TextMarkdown = () => {
  const [textEditorData, settextEditorData] = useState('');
  const [textEditorOutputData, settextEditorOutputData] = useState([]);

  const parseText = (e) => {
    settextEditorData(e.target.value);
    const arr = [];
    e.target.value.split('\n').map((item, index) => {
      // if (item.length >= item.lastIndexOf('*') + 1) {
      // eslint-disable-next-line no-useless-escape
      if (/[\*]{1}[^\*]+[\*]{1}/g.test(item)) {
        arr.push(
          <p key={index}>
            <b>
              {item.substring(item.indexOf('*') + 1, item.lastIndexOf('*'))}
            </b>
          </p>
        );
      } else if (/[_]{1}[^_]+[_]{1}/g.test(item)) {
        arr.push(
          <p key={index}>
            <i>
              {item.substring(item.indexOf('_') + 1, item.lastIndexOf('_'))}
            </i>
          </p>
        );
      } else if (/[-]{1}[^-]+[-]{1}/g.test(item)) {
        arr.push(
          <p key={index}>
            <del>
              {item.substring(item.indexOf('-') + 1, item.lastIndexOf('-'))}
            </del>
          </p>
        );
      } else if (/\[[\w\s\S]+\]\(https:\/\/[^\s]+\)/g.test(item)) {
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
        arr.push(<p key={index}>{item}</p>);
      }
      // }
    });
    settextEditorOutputData(arr);
  };

  const heading = `
  *text* - for bold
  _text_ - for italic
  -text- - for strikethrough
  [links](https://ashusingh.me) - for link`;

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

export default TextMarkdown;
