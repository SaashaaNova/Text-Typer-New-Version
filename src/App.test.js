import React from 'React';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TextTyper } from './TextTyper';


Enzyme.configure({ adapter: new Adapter() });


it('renders correctly', () => {
  const wrapper = shallow(
      <TextTyper delay={500} interval={600} content={['test render', 'to check']} />,
  );

  expect(wrapper).toMatchSnapchshot();
});
