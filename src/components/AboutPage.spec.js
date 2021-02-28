import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  it("should have a header called 'About'", () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('h1').text();
    const expected = 'About us';

    expect(actual).toEqual(expected);
  });

  it("should have a header with 'alt-header' class", () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('h1').prop('className');
    const expected = 'alt-header';
    console.log(actual);

    expect(actual).toEqual(expected);
  });

  // it('should link to an unknown route path', () => {
  //   const wrapper = shallow(<AboutPage />);
  //   const actual = wrapper.findWhere((n) => n.prop('to') === '/about').length;
  //   const expected = 1;

  //   expect(actual).toEqual(expected);
  // });
});
