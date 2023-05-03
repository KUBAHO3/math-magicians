import renderer from 'react-test-renderer';
import Layout from '../pages/Layout';

it('renders Quote page correctly', () => {
  const tree = renderer
    .create(<Layout />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});