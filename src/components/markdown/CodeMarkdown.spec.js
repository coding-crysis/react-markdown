import React from 'react';
import { shallow } from 'enzyme';
import CodeMarkdown from './CodeMarkdown';

describe('<CodeMarkdown />', () => {
  it("should have return 'code' tag", () => {
    const wrapper = shallow(<CodeMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value: '```if (isAwesome){return true}```',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<code>if (isAwesome){return true}</code>'
    );
  });

  it("should have return 'p' tag", () => {
    const wrapper = shallow(<CodeMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value: '```if (isAwesome){return true}',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<p>```if (isAwesome){return true}</p>'
    );
  });
});
