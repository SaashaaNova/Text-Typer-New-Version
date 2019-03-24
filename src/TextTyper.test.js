import React from 'React';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TextTyper } from './TextTyper';


Enzyme.configure({ adapter: new Adapter() });


describe('<TextTyper />', () => {
  const wrapper = render(<TextTyper />);

  it('should have an main-container class', () => {
    expect(wrapper.find('.main-container')).children();
  });
});
