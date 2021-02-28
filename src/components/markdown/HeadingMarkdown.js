import React, { useState } from 'react';

const HeadingMarkdown = () => {
  const [textEditorData, settextEditorData] = useState('');
  const [textEditorOutputData, settextEditorOutputData] = useState([]);

  const parseText = (e) => {
    settextEditorData(e.target.value);
    const arr = [];
    e.target.value.split('\n').map((item, index) => {
      if (item.length >= item.lastIndexOf('#') + 1) {
        console.log(item);
        if (/^(#{1}[a-zA-Z0-9 ])/.test(item)) {
          arr.push(
            <h1 key={index}>{item.substring(item.lastIndexOf('#') + 2)}</h1>
          );
        } else if (/^(#{2}[a-zA-Z0-9 ])/.test(item)) {
          arr.push(
            <h2 key={index}>{item.substr(item.lastIndexOf('#') + 2)}</h2>
          );
        } else if (/^(#{3}[a-zA-Z0-9 ])/.test(item)) {
          arr.push(
            <h3 key={index}>{item.substr(item.lastIndexOf('#') + 2)}</h3>
          );
        } else if (/^(#{4}[a-zA-Z0-9 ])/.test(item)) {
          arr.push(
            <h4 key={index}>{item.substr(item.lastIndexOf('#') + 2)}</h4>
          );
        } else if (/^(#{5}[a-zA-Z0-9 ])/.test(item)) {
          arr.push(
            <h5 key={index}>{item.substr(item.lastIndexOf('#') + 2)}</h5>
          );
        } else if (/^(#{6}[a-zA-Z0-9 ])/.test(item)) {
          arr.push(
            <h6 key={index}>{item.substr(item.lastIndexOf('#') + 2)}</h6>
          );
        } else {
          arr.push(<p key={index}>{item}</p>);
        }
      }
    });
    settextEditorOutputData(arr);
  };

  const heading = `
  # text - for H1
  ## text - for H2
  ### text - for H3
  #### text - for H4
  ##### text - for H5
  ###### text - for H6`;

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

export default HeadingMarkdown;
