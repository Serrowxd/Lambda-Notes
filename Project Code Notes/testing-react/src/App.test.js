import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />); // wrapper for our <COMPONENT />
    expect(wrapper).toHaveLength(1); // check that it is mounting what it should mount bylength
  });

  it('should have three children siblings', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').children()).toHaveLength(3); // checking the children will help you in the long run
  });

  it('should update count on state when button is clicked', () => {
    const wrapper = shallow(<App />);
    wrapper.find('button').prop('onClick')(); // same as below
    wrapper.find('button').simulate('click'); // same as above
    expect(wrapper.state().count).toEqual(2);
  });
});
