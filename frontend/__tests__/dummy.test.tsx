import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

describe('Dummy test', () => {
  it('renders a text element', () => {
    const { getByText } = render(<Text>Hello Test</Text>);
    expect(getByText('Hello Test')).toBeTruthy();
  });
});