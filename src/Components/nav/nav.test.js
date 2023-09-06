import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import MenuAppBar from './nav';

test('snapshot', async () => {
    
    const tree = renderer.create(
      <MenuAppBar/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });