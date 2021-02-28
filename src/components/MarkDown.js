import React, { useState } from 'react';
import '../styles/styles.scss';
import CodeMarkdown from './markdown/CodeMarkdown';
import HeadingMarkdown from './markdown/HeadingMarkdown';
import HtmlMarkdown from './markdown/HtmlMarkdown';
import ImagesMarkdown from './markdown/ImagesMarkdown';
import ListMarkdown from './markdown/ListMarkdown';
import TextMarkdown from './markdown/TextMarkdown';

const MarkDown = () => {
  const [activeTab, setActiveTab] = useState('a');
  const ShowTabData = () => {
    let comp = null;
    switch (activeTab) {
      case 'a':
        comp = <HeadingMarkdown />;
        break;
      case 'b':
        comp = <TextMarkdown />;
        break;
      case 'c':
        comp = <ListMarkdown />;
        break;
      case 'd':
        comp = <CodeMarkdown />;
        break;
      case 'e':
        comp = <ImagesMarkdown />;
        break;
      case 'f':
        comp = <HtmlMarkdown />;
        break;
      default:
        console.error('error');
    }
    return comp;
  };

  return (
    <div className="markdown">
      <h2 className="markdown-headers" style={{ backgroundColor: '#f8f9fa' }}>
        MarkDown Previewer
      </h2>
      <div>
        <ul className="tab-ul">
          <li>
            <a
              id="tab-1"
              href="#a"
              className={activeTab == 'a' ? 'selected' : ''}
              onClick={() => setActiveTab('a')}
            >
              Heading
            </a>
          </li>
          <li>
            <a
              id="tab-2"
              href="#b"
              className={activeTab == 'b' ? 'selected' : ''}
              onClick={() => setActiveTab('b')}
            >
              Text
            </a>
          </li>
          <li>
            <a
              id="tab-3"
              href="#c"
              className={activeTab == 'c' ? 'selected' : ''}
              onClick={() => setActiveTab('c')}
            >
              List
            </a>
          </li>
          <li>
            <a
              id="tab-4"
              href="#d"
              className={activeTab == 'd' ? 'selected' : ''}
              onClick={() => setActiveTab('d')}
            >
              Code
            </a>
          </li>
          <li>
            <a
              id="tab-5"
              href="#e"
              className={activeTab == 'e' ? 'selected' : ''}
              onClick={() => setActiveTab('e')}
            >
              Images
            </a>
          </li>
          <li>
            <a
              id="tab-6"
              href="#f"
              className={activeTab == 'f' ? 'selected' : ''}
              onClick={() => setActiveTab('f')}
            >
              Html
            </a>
          </li>
        </ul>
        <ShowTabData />
      </div>
    </div>
  );
};

export default MarkDown;
