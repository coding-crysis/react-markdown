import React from 'react';
import { shallow } from 'enzyme';
import TextMarkdown from './TextMarkdown';

describe('<TextMarkdown />', () => {
  it("should have return 'p' tag text as bold", () => {
    const wrapper = shallow(<TextMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value: '*Ankit*',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<p><b>Ankit</b></p>'
    );
  });

  it("should have return 'p' tag text as italic", () => {
    const wrapper = shallow(<TextMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value: '_Ankit_',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<p><i>Ankit</i></p>'
    );
  });

  it("should have return 'p' tag text as delete", () => {
    const wrapper = shallow(<TextMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value: '-Ankit-',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<p><del>Ankit</del></p>'
    );
  });

  it("should have return 'a' tag", () => {
    const wrapper = shallow(<TextMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value: '[links](https://ashusingh.me)',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<a href="https://ashusingh.me">links</a>'
    );
  });

  it("should have return 'p' tag", () => {
    const wrapper = shallow(<TextMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value: 'Ankit',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<p>Ankit</p>'
    );
  });
});
