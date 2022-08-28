import { act, render, screen } from '@testing-library/react';
import CountButton from './CountButton';
import '@testing-library/jest-dom';

/**
 * @group componenttest
 */
describe('CountButton', () => {
  it('can be set initial value', () => {
    render(<CountButton start={3} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('count is 3');
  });

  it('show +1 value when clicked', () => {
    render(<CountButton start={3} />);
    const button = screen.getByRole('button');
    act(() => {
      button.click();
    });
    expect(button).toHaveTextContent('count is 4');
  });
});
