import React from 'react';
import { shallow } from 'enzyme';
import ImagesMarkdown from './ImagesMarkdown';

describe('<ImagesMarkdown />', () => {
  it("should have return 'img' tag", () => {
    const wrapper = shallow(<ImagesMarkdown />);
    wrapper.find('textarea').simulate('keyup', {
      target: {
        value:
          '![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)',
      },
    });

    expect(wrapper.find('.text-editor-div').childAt(0).html()).toEqual(
      '<img src="https://octodex.github.com/images/yaktocat.png" width="200" height="200"/>'
    );
  });

  it("should have return 'p' tag", () => {
    const wrapper = shallow(<ImagesMarkdown />);
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
