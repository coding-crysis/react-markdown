import React, { useState } from 'react';

const ListMarkdown = () => {
  const [textEditorData, settextEditorData] = useState('');
  const [textEditorOutputData, settextEditorOutputData] = useState([]);

  const parseText = (e) => {
    settextEditorData(e.target.value);
    const arr = [];
    const orderList = [];
    const unorderList = [];
    let temp;
    if (e.target.value.match(/[0-9]\. /gi)) {
      e.target.value.match(/[0-9]\. /gi).map((item, index) => {
        temp = e.target.value
          .split(/\n/g)
          .find((itemx) => itemx.includes(item));
        orderList.push(
          <li key={index}>{temp.substring(temp.indexOf(item) + 3)}</li>
        );
      });
      arr.push(<ol>{orderList}</ol>);
    }
    if (e.target.value.match(/\*\. [^\n]+/gi)) {
      e.target.value.match(/\*\. [^\n]+/gi).map((item, index) => {
        unorderList.push(
          <li key={index}>{item.substring(item.indexOf(/\*\. /) + 4)}</li>
        );
      });
      arr.push(<ul>{unorderList}</ul>);
    }
    settextEditorOutputData(arr);
  };

  const heading = `
  1. Text - for ordered list
  *. Text - for unordered list`;

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

export default ListMarkdown;
