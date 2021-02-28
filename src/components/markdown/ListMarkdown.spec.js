import React from 'react';
import { shallow } from 'enzyme';
import ListMarkdown from './ListMarkdown';

describe('<ListMarkdown />', () => {
  it('should have return ordered list', () => {
    const wrapper = shallow(<ListMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value: '1. Ankit\n2. Seth',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<ol><li>Ankit</li><li>Seth</li></ol>'
    );
  });

  it('should have return unordered list', () => {
    const wrapper = shallow(<ListMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value: '* Ankit\n* Seth',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<ul><li>Ankit</li><li>Seth</li></ul>'
    );
  });

  it('should have return ordered & unordered list', () => {
    const wrapper = shallow(<ListMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value: '1. Ankit*Seth\n* Seth',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<ol><li>Ankit*Seth</li></ol>'
    );
    expect(wrapper.find('.text-editor-div').childAt(1).html()).toEqual(
      '<ul><li>Seth</li></ul>'
    );
  });
});
