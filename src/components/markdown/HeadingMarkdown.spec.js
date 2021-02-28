import React from 'react';
import { shallow } from 'enzyme';
import HeadingMarkdown from './HeadingMarkdown';

describe('<HeadingMarkdown />', () => {
  it("should have return 'h1' tag", () => {
    const wrapper = shallow(<HeadingMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value: '# Ankit',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<h1>Ankit</h1>'
    );
  });

  it("should have return 'h2' tag", () => {
    const wrapper = shallow(<HeadingMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value: '## Ankit',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<h2>Ankit</h2>'
    );
  });

  it("should have return 'h3' tag", () => {
    const wrapper = shallow(<HeadingMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value: '### Ankit',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<h3>Ankit</h3>'
    );
  });

  it("should have return 'h4' tag", () => {
    const wrapper = shallow(<HeadingMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value: '#### Ankit',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<h4>Ankit</h4>'
    );
  });

  it("should have return 'h5' tag", () => {
    const wrapper = shallow(<HeadingMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value: '##### Ankit',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<h5>Ankit</h5>'
    );
  });

  it("should have return 'h6' tag", () => {
    const wrapper = shallow(<HeadingMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value: '###### Ankit',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<h6>Ankit</h6>'
    );
  });

  it("should have return 'p' tag", () => {
    const wrapper = shallow(<HeadingMarkdown />);
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
