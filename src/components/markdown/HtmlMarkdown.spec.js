import React from 'react';
import { shallow } from 'enzyme';
import HtmlMarkdown from './HtmlMarkdown';

describe('<HtmlMarkdown />', () => {
  it("should have return 'a' tag inside 'kbd' tag", () => {
    const wrapper = shallow(<HtmlMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value:
          '[Github](https://github.com/DDCreationStudios) / [FreeCodeCamp](https://www.freecodecamp.com/ddcreationstudios)',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<kbd><a href="https://github.com/DDCreationStudios">Github</a> / <a href="https://www.freecodecamp.com/ddcreationstudios">FreeCodeCamp</a></kbd>'
    );
  });

  it("should have return 'p' tag inside 'kbd' tag", () => {
    const wrapper = shallow(<HtmlMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value: 'Ankit',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<kbd><p>Ankit</p></kbd>'
    );
  });
});
