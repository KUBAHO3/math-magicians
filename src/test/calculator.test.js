import renderer from 'react-test-renderer';
import Calculator from '../pages/Calculator';

it('renders Quote page correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});